import ChangeTitle from '../../component/SharedComponents/ChangeTitle';
import './errorPage.css'

function ErrorPage (){

    return (
        <div className="error-section">
            <ChangeTitle title={"MEI | Error Page"} />
            <h1>404</h1>
            <p>Oops! The page you are looking for cannot be found.</p>
            <div className="animation">
                <div className="ghost">
                    <div className="face"></div>
                </div>
                <div className="shadow"></div>
            </div>
            <a href="/" className="home-link">Go Home</a>
        </div>
    );
}


export default ErrorPage;