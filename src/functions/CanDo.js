function CanDo() {
    return (
        <div class="skills">
            <div id="skills-title">
                <h1 id="sk-h1">What I can do</h1>
                <div id="shape-sk"></div>
            </div>
            <table cellSpacing="1">
                <tr>
                    <th>
                        <div className="sk-item" id="mern">
                            <img id="mern" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" width="256"/>
                            <div id="mern-hover">
                                <p><code>I can create a full stack web app using the M.E.R.N Stack.</code></p>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="sk-item">
                            <img id="discord" src="https://www.nicepng.com/png/full/25-255613_discord-bot-logo-black-discord-logo-png.png" width="64"/>
                            <div id="discord-hover">
                                <p><code>I can create any type of Discord Bot using Javascript.</code></p>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="sk-item">
                            <img id="firebase" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png?hl=id" width="256"/>
                            <div id="firebase-hover">
                                <p><code>I can create and handle web apps/discord bot using google's Firebase.</code></p>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div className="sk-item">
                            <img id="electron" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1024px-Electron_Software_Framework_Logo.svg.png" width="128"/>
                            <div id="electron-hover">
                                <p><code>I can create a web desktop app using the Electron Framework.</code></p>
                            </div>
                        </div>
                    </th>
                </tr>
            </table>
        </div>
    )
}

export default CanDo;