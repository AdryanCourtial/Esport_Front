import "./ContentB.css"

const ContentB = () => {
  return (
    <main>
    <div className="container_content">
        <img className="image" src="/back-view-man-playing-videogame.jpg" alt="image-reseau-tournois" />
        <p className="description">
        ✔ Un réseau de gamers : fais des rencontres, partage tes passions, trouve des mates pour tes ranked ! <br />
        ✔ Une organisation étudiante : un projet fait par des étudiants, pour des étudiants ! <br />
        ✔ Une expérience e-sport : participe à des événements bien organisés et fais vibrer ton esprit compétitif. </p>
    </div>

    <div className="container_content reverse-container">
        <img className="image" src="/friends-playing-games-together.jpg" alt="image-reseau-tournois" />
        <p className="description">
        🏆 Bienvenue sur Pôle Esport – La communauté gaming d'Ynov !
        <br />Depuis maintenant 2 ans, Pôle Esport réunit les étudiants passionnés de jeux vidéo du campus Ynov. Notre objectif ? Créer une communauté forte et dynamique autour de l’e-sport en organisant des tournois réguliers, que ce soit en ligne ou directement sur le campus. Avec une équipe de 11 étudiants motivés et passionnés, nous mettons tout en œuvre pour offrir une expérience compétitive et conviviale à tous les joueurs, qu’ils soient casuals ou compétitifs. 
        <br />Que tu sois là pour le fun ou pour la victoire, il y a toujours une place pour toi chez Pôle Esport !
        </p>
    </div>

    <div className="container_content">
        <img className="image" src="/medium-shot-victorious-gamers-winning.jpg" alt="image-reseau-tournois" />
        <p className="description">
        🎮 Des tournois pour tous les joueurs Tous les deux mois, nous organisons des événements où les étudiants peuvent s'affronter, s'amuser et partager leur passion. <br />Que tu sois un pro du clutch ou un simple amateur de bonne ambiance, nos tournois sont ouverts à tous ! <br /> <br />👉 En ligne ou en présentiel : participe depuis chez toi ou viens profiter de l’ambiance sur le campus. <br />👉 Multi-jeux : FPS, MOBA, Jeux de plateforme… On varie les plaisirs pour que chacun trouve son jeu ! <br />
        </p>
    </div>

    <div className="container_content reverse-container">
        <img className="image" src="/tourists-go-up-hill-sunrise.jpg" alt="image-reseau-tournois" />
        <p className="description">
        🤝 Rejoins-nous ! Tu veux être au courant de nos prochains événements ? Tu veux intégrer l’équipe et aider à organiser les tournois ? <br />📩 Suis-nous sur nos réseaux sociaux et reste connecté à la communauté Pôle Esport !
        </p>
    </div>

    </main>
    
  );
};

export default ContentB;
