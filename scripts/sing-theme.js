import {LitElement, html, css} from '/assets/lit-core.min.js';

export class Navigation extends LitElement {
    static styles = css`
        .menubar {
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            z-index: 100;
            position: sticky;
            top: 0;
            backdrop-filter: saturate(180%) blur(20px);
            background-color: rgba(255, 255, 255, 0.72);
            border-bottom: 1px solid rgb(243, 244, 246);
        }
        .menubar .container {
            justify-content: space-between;
        }
        .menubar .logo {
            flex-shrink: 0;
            justify-content: flex-start;
            height: 52px;
        }
        .menubar .logo a {
            border: none;
            display: flex;
        }
        .menubar .logo img {
            height: 36px;
        }
        .menubar .items {
            gap: 2rem;
        }
        .menubar .item {
            font-size: 0.95rem;
            font-weight: 400;
        }
        @media screen and (max-width: 767px){
            .menubar .logo {
                justify-content: center;
                height: 60px;
            }
            .menubar {
                padding-bottom: 1rem;
            }
        }
    `;
    render() {
        return html`
            <link href="scripts/sing-theme.css" rel="stylesheet">
            <div class="menubar">
                <div class="container flex-no-mobile">
                    <div class="logo flex"><a href="/"><img src="./assets/tacc-logo.png"></a></div>
                    <div class="items flex">
                        <div class="item"><a href="/">Jobs</a></div>
                        <div class="item"><a href="storage.html">Storage</a></div>
                        <div class="item"><a href="images.html">Images</a></div>
                        <div class="item"><a href="#">Space</a></div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define('sing-navigation', Navigation);
