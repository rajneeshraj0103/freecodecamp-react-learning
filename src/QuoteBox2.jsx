const QuoteBox2 = (props) => {
    const { quote } = props;

    return (
        <div className="m-4 flex">
            <div className="bg-blue-500 w-64 p-4 rounded-l-lg">
                <div className="text-3xl text-white mb-2">
                    {quote.author}
                </div>

                <div className="text-blue-300">
                    {quote.bio}
                </div>
            </div>

            <div className="w-80 border border-stone-300 p-12 text-stone-500 rounded-r-full">
                {quote.text}
            </div>
        </div>
    );
};

export default QuoteBox2;