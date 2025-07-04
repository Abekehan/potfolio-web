import React from "react";
import "../css/Home.css"; // Подключаем стили

const Card = () => {
  return (
    <div className="project-wrapper">
      <div className="project-row">
        <div className="project-card left">
          <img src="/images/project1.png" alt="Project 1" />
          <div className="project-content">
            <h3>WOHNGEBIET “CLUSTER”</h3>
            <p>
              Auch bei der Konzeptarbeit war es wichtig, genügend Flexibilitat
              für Wohnungen zu schaffen, mit denen eine starke soziale Struktur
              geschaffen werden könnte. Die beiden Korper des Gebaudes sind
              praktisch dupliziert, aber trotzdem haben sie unterschiedliche
              Layouts und bieten entsprechend unterschiedliche Optionen für
              verschiedene Personen.
            </p>
          </div>
        </div>
        <div className="project-card right">
          <img src="/images/project2.png" alt="Project 2" />
          <div className="project-content">
            <h3>ARCHITEKTUR </h3>
            <p>
              Die beiden Korper des Gebaudes haben eine Stafeletage, in der sich
              die Cluster -Wohnung befindet, wodurch eine ausreichend große
              Terrasse entsteht. Ein Teil der Wohnung verfugt über vorstehende
              Balkone oder sehr separate Тerrassen. .
            </p>
          </div>
        </div>
      </div>

      <div className="project-row">
        <div className="project-card left">
          <img src="/images/project3.png" alt="Project 3" />
          <div className="project-content">
            <h3>Neue City-West “Ludwigshafen”</h3>
            <p>
              Das ursprüngliche Ziel war ein Paradigmenwechsel der modernen
              Stadtplanung, und eines der Hauptthemen war die Veränderung der
              Mobilität, die Reduzierung von Verkehrsflächen und die Umwandlung
              in neue städtische, umweltfreundliche Gebiete mit hoher
              Lebensqualität. Im Mittelpunkt steht auch das vorgeschlagene
              Grundstück, das am jetzigen Standort auf der Insel begrenzt ist,
              in der Nähe einer hohen Straße und einer Eisenbahnlinie, die das
              Stadtzentrum verbindet.{" "}
            </p>
          </div>
        </div>
        <div className="project-card right">
          <img src="/images/project4.png" alt="Project 4" />
          <div className="project-content">
            <h3>LAGEPLAN</h3>
            <p>
              Das Grundstück ist in mehrere Funktionsbereiche unterteilt, in
              denen öffentliche Bereiche auf beiden Seiten vorhanden sind, z. B.
              der Theaterbereich auf der anderen Seite des Coworking Spaces. Und
              auch die halbprivaten und privaten Bereiche von Block A und B.
              Durch die Eingangsgruppen können die Bewohner an einen ruhigen Ort
              gelangen, von wo aus die Bewohner auch in ihre Unterkünfte
              gelangen können.
            </p>
          </div>
        </div>
      </div>
      <div className="project-row">
        <div className="project-card left">
          <img src="/images/project5.jpg" alt="Project 5" />
          <div className="project-content">
            <h3>PRAUNHEIM SIEDLUNG- INDIVIDUELLE WOHNUNG</h3>
            <p>
              Als Grundlage für das Projekt wurde ein kleines Grundstück, das an
              die Putzerstraße grenzt, ausgewählt. Eine Reihe von Häusern ragen
              in Nord-Süd-Richtung vor. Bei der Entwicklung musste das Konzept
              so gestaltet werden, dass es dem Thema der Serienproduktion und
              der individuellen Produktion entspricht. Der historische Kontext
              ist sehr wichtig, wie zum Beispiel die Erhaltung der Gebäudeform,
              die sich nicht stark vom Gesamtkontext des Gebiets abhebt. So
              wurden Reihenhäuser entworfen, mit Flachdach und kubischer Form,
              und natürlich musste auch die Idee, in die die Autoren
              ursprünglich als Konzept für die grüne Stadt eingegangen waren,
              beibehalten werden.
            </p>
          </div>
        </div>
        <div className="project-card right">
          <img src="/images/project6.jpg" alt="Project 6" />
          <div className="project-content">
            <h3>FUNKTION</h3>
            <p>
              In Praunheim gibt es viele verschiedene Arten von Häusern
              mit unterschiedlichen Eigenschaften, zum Beispiel können einige
              aus Ziegeln und einige mit Plattenbau gebaut werden. Einige sind
              mit einer Dachterrasse geplant, können auch entweder Gas-, Kohle-
              oder Elektroheizung haben.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
