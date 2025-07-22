
const Fotter = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content !p-7 ">

                <aside>
                    <h1 className="text-2xl font-extrabold">SwapSavvy</h1>
                    <p>
                        Niloy Industries Ltd.
                        <br />
                        Providing reliable tech
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Platform</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">How It Works</a>
                    <a className="link link-hover">Blog/Resources(later)</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Help Center/FAQ</a>
                    <a className="link link-hover">Terms&Conditions</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Report a Problem</a>
                </nav>
                <nav>
                    <h6 className="footer-title">For Users</h6>
                    <a className="link link-hover">Become a Skill Sharer</a>
                    <a className="link link-hover">Start Learning</a>
                    <a className="link link-hover">Join Community</a>
                </nav>

            </footer>
            <aside>
                <p className="text-center bg-base-300 !p-4">Copyright © {new Date().getFullYear()} - All right reserved by Niloy Bhuiyan</p>
            </aside>
        </div>
    );
};

export default Fotter;