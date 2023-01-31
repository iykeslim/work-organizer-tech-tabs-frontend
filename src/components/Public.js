import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Iykeslim's Hardware Management!</span></h1>
            </header>
            <main className="public__main">
                <p>No. 319, Slim Islands Somewhere Nice</p>
                <address className="public__addr">
                    Iykeslim's Hardware Management<br />
                    Slim Islands Somewhere Nice<br />
                    No. 319, Somewhere Nice<br />
                    <a href="tel:+2348030608066">(222) 222-22222</a>
                </address>
                <br />
                <p>Owner: Michael Ikechukwu</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public