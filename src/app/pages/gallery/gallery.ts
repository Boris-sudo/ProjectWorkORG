import { AfterViewInit, Component, effect, ElementRef, OnDestroy, Renderer2, signal, ViewChild } from '@angular/core';
import { AnimationsService } from '../../services/animations';

@Component({
    selector: 'app-gallery',
    imports: [],
    templateUrl: './gallery.html',
    styleUrl: './gallery.css'
})
export class Gallery implements AfterViewInit, OnDestroy {
    @ViewChild('gallery') galleryContainer!: ElementRef<HTMLDivElement>;

    galleryColumns = 0;

    images: string[] = [
        'travel/img.png',
        'travel/img1.jpg',
        'travel/img2.jpg',
        'travel/img3.webp',
        'travel/img4.jpg',
        'travel/img5.jpg',
        'travel/img6.jpg',
        'travel/img7.webp',
        'travel/img8.jpg',
        'travel/img9.jpg',
        'travel/img10.jpg',
        'travel/img11.jpg',
        'travel/img12.jpg',
        'travel/img13.jpg',
        'travel/img14.jpg',
        'travel/img15.webp',
        'travel/img16.jpeg',
        'travel/img17.webp',
        'travel/img18.jpg',
        'travel/img19.jpg',
        'travel/img20.jpg',
        'travel/img21.jpg',
        'views/img.jpg',
    ];

    constructor(
        private renderer: Renderer2,
        private animationsService: AnimationsService
    ) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.setImages();
        });
        addEventListener('resize', () => {
            setTimeout(() => {
                this.setImages();
            });
        });
    }

    ngOnDestroy() {
        this.animationsService.destroyObserver();
    }

    async setImages() {
        const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

        const windowWidth = window.innerWidth;
        let columnsCount = 0;

        if (windowWidth < 652) columnsCount = 1;
        else if (windowWidth < 1004) columnsCount = 2;
        else columnsCount = 3;

        if (columnsCount === this.galleryColumns) return;
        this.galleryColumns = columnsCount;

        const gallery = this.galleryContainer.nativeElement;
        gallery.innerHTML = '';

        await sleep(10);

        for (let i = 0; i < this.galleryColumns; i++) {
            const col = this.renderer.createElement('div');
            col.style.width = `calc((100% - 20px * ${ this.galleryColumns - 1 }) / ${ this.galleryColumns })`;
            gallery.appendChild(col);
        }

        const columns = gallery.children;
        for (const src of this.images) {
            let index = 0;
            for (let i = 0; i < columns.length; i++)
                if (columns.item(i)!.getBoundingClientRect().height < columns.item(index)!.getBoundingClientRect().height)
                    index = i;

            const image = this.renderer.createElement('img');
            image.src = src;
            this.animationsService.addObservableElement(image);
            columns.item(index)!.appendChild(image);

            await sleep(100);
        }
    }
}
