import Header from "./header/Header";
import ImgProject from "./main/preview/ImgProject";
import Card from "./main/preview/Card";

const Preview = ({data}) =>{

    return(
        <>
            <Header />
            <main className="main">
                <section className="preview">
                <ImgProject data={data} />
                <Card data={data} />
                </section>
            </main>
        </>
    )
}

export default Preview;