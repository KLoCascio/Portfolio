export default function TechPanel() {
    return (
    <div className="TechPanel">
        <h2>Projects</h2>
        <div className="Projects">
            <div className="Project">
                <h2><a href="https://github.com/KLoCascio/DungeonFit" target="_blank">DungeonFit</a></h2>
                <p>A goals driven Fitness Tracker App that encourages fitness with a gaming influence.</p>
                <p>Tech: React, JavaScript, Mongoose, Express, Node, CSS, HTML</p>
            </div>
            <div className="Project">
                <h2><a href="https://github.com/KLoCascio/Spirited-Solutions" target="_blank">Spirited Solutions</a></h2>
                <p><a href="https://radiant-dodol-6374e8.netlify.app/" target="_blank">Deployment Here</a></p>
                <p>Agile group project created using a cocktail API, allowing users to search by ingredients.</p>
                <p>Tech: React, MongoDB, JavaScript, CSS, HTML</p>
            </div>
            <div className="Project">
                <h2><a href="https://github.com/KLoCascio/SithScripters" target="_blank">Sith Scripters</a></h2>
                <p>Agile group project to create a Star Wars themed energy drink with reviews page.</p>
                <p>Tech: JavaScript, MongoDB, CSS, HTML </p>
            </div>
            <div className="Project">
                <h2><a href="https://github.com/KLoCascio/MCBuild" target="_blank">MCBuild</a></h2>
                <p>A Full-Stack project utilizing a database built and seeded with over 100 objects, allowing the user to build a Main Character, MC.</p>
                <p>Tech: MongoDB, Express, NodeJS, JavaScript, CSS, HTML </p>
            </div>
        </div>

        <div className="TechList">
        <h2>Languages</h2>
        <p>React, JavaScript, CSS, HTML, Python, Django, Express, MongoDB, NodeJS, Vite, Figma</p>
        </div>
    </div>
    )
}