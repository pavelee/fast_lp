const LpPageCard = (props) => {
    const { url, title, cover } = props;
    return (
        <div className="border p-5">
            <a href={url}>
                <div className="text-center">
                    <p className="mb-3">{title}</p>
                    <img src={cover} />
                </div>
            </a>
        </div>
    );
};

export default function Home() {
    return (
        <div className="container mx-auto">
            <div className="md:p-16">
                <h1 className="text-3xl underline mb-16">Hello! Let's pick a layout!</h1>
                <div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <LpPageCard
                                url={"/pavo"}
                                title={"Pavo! Your LP mobile page!"}
                                cover={"pages/pavo/pavo.png"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
