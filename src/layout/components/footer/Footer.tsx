
import './Footer.scss';

export function Footer() {
    return (
    <footer className="p-8 flex flex-col gap-10 footer bg-blue text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            <section className="flex flex-col footer__section md:flex-1 sm:pl-20">
                    <h3 className="footer__sectionTitle mb-5 text-2xl font-semibold">
                        Contact
                    </h3>
                    <p>
                        P.O.BOX 62309, CY 8063
                    </p>
                    <p>
                        Paphos, Cyprus
                    </p>
                    <p>
                        T: +35726949200
                    </p>
                    <p>
                        F: +35726949200
                    </p>
                    <p>
                        E:
                    </p>
                    <p>
                        info@venusabeachhotel.com
                    </p>
            </section>
            <section className="flex flex-col footer__section md:flex-1 sm:pl-20">
                    <h3 className="footer__sectionTitle mb-5 text-2xl font-semibold">
                        Links
                    </h3>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        Cookie Policy
                    </p>
                    <p>
                        My Reservation
                    </p>
            </section>
            <section className="flex flex-col footer__section md:flex-1 sm:pl-20">
                    <h3 className="footer__sectionTitle mb-5 text-2xl font-semibold">
                        Social
                    </h3>
                    <p>
                        Facebook
                    </p>
                    <p>
                        Instagram
                    </p>
            </section>
        </div>
        <div className="flex flex-wrap justify-between opacity-60 gap-5">
            <div className="w-100 md:w-auto">
                <p>2024 @ Venus Beach Hotel Paphos. GCN: Σ 8348.</p>
                <p>Hotel website by: HOTELWIZE</p>
            </div>
            <p className="text-right">Local Time: 14:59</p>
        </div>
    </footer>);
}