function Action() {
    return (
        <div className="flex flex-wrap mx-10 mt-20 gap-x-20 gap-y-10">
            <div className="w-96 border rounded-3xl bg-white shadow-2xl">
                <h1 className="text-3xl text-center my-5">Transportation</h1>
                <ul className="list-disc ml-10 pb-5 px-5">
                    <li>Use public transportation or walk when possible</li>
                    <li>Citi bikes provide a cost efficient and greener mode of transportation</li>
                    <li>If driving is necessary, join your friends and carpool</li>
                </ul>
            </div>
            <div className="w-96 border rounded-3xl bg-white shadow-2xl">
                <h1 className="text-3xl text-center my-5">Electrical Energy Use</h1>
                <ul className="list-disc ml-10 pb-5 px-5">
                    <li>Turn off lightbulbs and unplug electronics when not in use</li>
                    <li>Switch to LED or compact fluorescent light bulbs that use 75-85% less energy and last longer than incandescent bulbs</li>
                </ul>
            </div>
            <div className="w-96 border rounded-3xl bg-white shadow-2xl">
                <h1 className="text-3xl text-center my-5">Water Use</h1>
                <ul className="list-disc ml-10 pb-5 px-5">
                    <li>Do laundry/dishes more eficiently by doing full loads less frequesntly</li>
                    <li>Use cold water for washing clothes and line dry if possible</li>
                    <li>Save water taking shorter showers</li>
                </ul>
            </div>
            <div className="w-96 border rounded-3xl bg-white shadow-2xl">
                <h1 className="text-3xl text-center my-5">Food</h1>
                <ul className="list-disc ml-10 pb-5 px-5">
                    <li>The red meat industry produces a lot of green house gas emissions. Try eating less meat with Meatless Mondays!</li>
                    <li>Eat more conciously by sourcing food locally and sustainably</li>
                </ul>
            </div>
            <div className="w-96 border rounded-3xl bg-white shadow-2xl">
                <h1 className="text-3xl text-center my-5">Waste</h1>
                <ul className="list-disc ml-10 pb-5 px-5">
                    <li>Use reusable items such as water bottles, food containers and grocery bags</li>
                    <li>Donate items/shop at thrift shops to give items a second life</li>
                </ul>
            </div>
        </div>
    );
}

export default Action;