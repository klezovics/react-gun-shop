function Navbar() {

    return (
        <div>
            <navbar>

                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li onClick={playGunSound} className="mr-2">
                        <a href="#" className="inline-block py-3 px-4 text-white bg-blue-600 rounded-lg active"
                           aria-current="page">Guns</a>
                    </li>
                    <li onClick={playGrenadeSound} className="mr-2" >
                        <a href="#"
                           className="inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Grenades</a>
                    </li>
                </ul>
            </navbar>
        </div>
    );
}

const gunSound = new Audio("/gunshop/sounds/machinegun-fire.mp3")
let playGunSound = () => { gunSound.play() }

const grenadeSound = new Audio("/gunshop/sounds/grenade.mp3")
let playGrenadeSound = () => { grenadeSound.play() }


export default Navbar;
