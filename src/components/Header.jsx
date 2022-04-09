import React from "react";

export default function Header() {
    return (
        <header class="w-4/5 mx-auto">
            <nav class="flex items-center justify-between py-4">
                <a>
                    <img src="/assets/LOGO.png" width="175" alt="Torque" />
                </a>
                <ul class="text-white text-2xl font-medium flex items-center justify-evenly space-x-10">
                    <li>
                        <a href="https://linktr.ee/torque_money">Links</a>
                    </li>
                    <li>
                        <a class="bg-fuchsia-700 hover:bg-fuchsia-600 px-6 py-3 rounded-xl font-bold glow" href="https://app.torque.money/">
                            App
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="xl:mt-32 mt-8 flex xl:flex-row flex-col xl:items-start items-center justify-evenly xl:space-y-0 space-y-16 xl:space-x-32 w-11/12 mx-auto">
                <div class="flex flex-col items-start space-y-8" style="min-width: 300px">
                    <div class="text-5xl font-bold text-white pt-32">
                        <h1>
                            Extreme <span class="text-fuchsia-600">DeFi</span>
                        </h1>
                        <h1 class="text-6xl">Leveraging</h1>
                    </div>
                    <h2 class="text-xl text-neutral-400 font-medium w-11/12">
                        Torque provides clients with huge amounts of <span class="text-neutral-300">leverage</span> and
                        <span class="text-neutral-300">liquidity providing</span> rewards for the most popular cryptocurrencies whilst being
                        <span class="text-neutral-300">100% decentralized and permissionless.</span>
                    </h2>
                    <a class="text-2xl px-6 py-3 rounded-xl bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold glow" href="https://app.torque.money/">
                        Get Started
                    </a>
                </div>
                <img class="glow rounded-xl" src="/assets/APP.png" width="800" />
            </div>
        </header>
    );
}
