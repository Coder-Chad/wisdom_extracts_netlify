class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupMobileMenu();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Add your navbar styles here */
                .hidden {
                    display: none;
                }
            </style>
            <nav>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex items-center">
                            <a href="#" class="text-white">Logo</a>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a href="#" class="text-white">Home</a>
                                <a href="#" class="text-white">About</a>
                                <a href="#" class="text-white">Contact</a>
                            </div>
                        </div>
                        <div class="md:hidden">
                            <button id="mobile-menu-button" class="text-white">
                                Menu
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" class="hidden md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" class="text-white block">Home</a>
                        <a href="#" class="text-white block">About</a>
                        <a href="#" class="text-white block">Contact</a>
                    </div>
                </div>
            </nav>
        `;
    }

    setupMobileMenu() {
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        } else {
            console.error('Mobile menu elements not found');
        }
    }
}

customElements.define('nav-bar', NavBar);