import {Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'FooterComp',
    imports: [
        RouterLink
    ],
    styles: `
        .container {
            display:        flex;
            flex-direction: column;
            height:         500px;
            background:     var(--text-primary);
            color:          var(--background-primary);
            position:       relative;
            z-index:        2;
        }

        .grid-container {
            height:                100%;
            display:               grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, 1fr);

            div {
                width:   100%;
                height:  100%;
                display: flex;
            }
        }

        .logo-container {
            grid-row:        span 1;
            grid-column:     span 1;
            align-items:     center;
            justify-content: center;
            flex-direction:  column;

            p {
                cursor:              pointer;
                font-size:           4em;
                font-weight:         800;
                font-family:         var(--ff-noto), sans-serif;
                transition-duration: .3s;

                &:hover {
                    color: var(--background-accent);
                }
            }
        }

        .media-container {
            grid-row:        span 2;
            grid-column:     span 1;
            align-items:     center;
            justify-content: center;
            gap:             20px;
            flex-direction:  column;

            .media {
                height:          fit-content;
                display:         flex;
                flex-direction:  row;
                align-items:     center;
                justify-content: center;
                gap:             30px;
            }

            p {
                text-align:  center;
                font-size:   20px;
                font-weight: 600;
            }

            a {
                width:               40px;
                padding:             8px;
                cursor:              pointer;
                aspect-ratio:        1/1;
                background:          var(--text-primary);
                color:               var(--background-primary);
                border-radius:       var(--br-100);
                display:             flex;
                align-items:         center;
                justify-content:     center;
                transition-duration: .6s;

                svg {
                    width: 100%;
                }

                &:hover {
                    background: var(--background-accent);
                    color:      var(--background-primary);
                }
            }
        }
    `,
    template: `
        <div class="container">
            <div class="grid-container">
                <div class="logo-container">
                    <p routerLink="home">Кубачи Дербент</p>
                </div>
                <div class="media-container">
                    <p>Следите за нами в социальных сетях</p>
                    <div class="media">
                        <a href="https://yandex.ru/maps/?um=constructor%3Ae7e127a7107135439eea1ba3f32def1b880cfc7888ce87dfcc47b28a001185cd&source=constructorLink"
                           style="--timeout: .0s">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
                                <path
                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
                            </svg>
                        </a>
                        <a href="https://www.skvclub.ru/semejnie-programmi/2023dagestan" style="--timeout: .1s">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
                                <path d="M11 14h1v4h1"/>
                                <path d="M12 11h.01"/>
                            </svg>
                        </a>
                        <a href="https://t.me/bokisarik" style="--timeout: .2s">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Footer {

    constructor(
        private router: Router
    ) {
    }

    redirectTo(url: string) {
        window.scrollTo(0,0);
        setTimeout(() => {
            this.router.navigate([url]).then();
        })
    }
}
