export default function AboutPanel() {
    return (
        <div className="AboutPanel">
            <div className="AboutMe">
                <h1>Software Engineer</h1>
                <p>Software Engineer with a passion for building impactful solutions. I leverage my diverse background - from leading teams to building full-stack applications - to bring fresh perspectives and a results-oriented approach to every project. I thrive in collaborative environments and am eager to contribute my technical skills (JavaScript, React, Node.js, etc.) to innovative projects at a company where technology makes a real difference.</p>
            </div>
            
            <div className="TechIcons">
            <img src="public/Icons/React.svg" alt="React" />
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" />
            <img src="public/assets/Icons/CSS.svg" alt="CSS" />
            <img src="/public/assets/Icons/HTML5.svg" alt="HTML" />

            <img src="../public/assets/Icons/Python.svg" alt="Python" />
            <img src="src/assets/Icons/ChocoIcon.png" alt="Django" />
            <img src="/assets/Icons/Express.svg" alt="Express" />
            <img src="./assets/Icons/MongoDB.svg" alt="MongoDB" />
            <img src="./src/assets/Icons/NodeJS.svg" alt="NodeJS" />

            <img src="public/assets/Icons/Vite.svg" alt="Vite" />
            <img src="public/assets/Icons/Figma.svg" alt="Figma" />
        </div>
        
            <div className="Buttons">
                <button className="gameButton"><a href="https://whacka-moleff7.surge.sh/" target="_blank">Play A Game</a></button>
            </div>

                <div className="Contact">
                    <a href="https://github.com/KLoCascio" target="_blank">GitHub </a> | <a href="https://www.linkedin.com/in/kyndallocascio/" target="_blank"> LinkedIn</a>
                </div>
        </div>
)
}