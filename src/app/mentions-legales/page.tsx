import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales et confidentialité",
  description:
    "Éditeur, hébergeur, propriété intellectuelle et traitement des données du site portfolio-juju.saro.app.",
};

const SITE = "portfolio-juju.saro.app";

const Section = ({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) => (
  <section className="mb-10">
    <h2
      className="text-3xl mb-3"
      style={{ fontFamily: "Coastgane, sans-serif" }}
    >
      {titre}
    </h2>
    <div className="space-y-3 text-base leading-relaxed">{children}</div>
  </section>
);

export default function MentionsLegales() {
  return (
    <main lang="fr" className="relative min-h-screen bg-white">
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="inline-block mb-10 text-sm underline underline-offset-4"
        >
          Retour à l&apos;accueil
        </Link>

        <h1
          className="text-5xl sm:text-6xl mb-4"
          style={{ fontFamily: "Coastgane, sans-serif" }}
        >
          Mentions légales et confidentialité
        </h1>
        <p className="text-sm text-gray-600 mb-12">
          Site concerné : {SITE}
        </p>

        <Section titre="1. Éditeur du site">
          <p>Le site est édité par SARO.</p>
          <ul className="space-y-2">
            <li>Raison sociale : SARO</li>
            <li>Statut juridique : entreprise individuelle</li>
            <li>SIRET : 924 821 366 00011</li>
            <li>TVA intracommunautaire : FR76924821366</li>
            <li>Lieu d&apos;établissement : Toulouse, France</li>
            <li>Capital social : sans objet</li>
            <li>
              Adresse électronique de contact :{" "}
              <a
                href="mailto:contact@saro.app"
                className="underline underline-offset-4"
              >
                contact@saro.app
              </a>
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            Les coordonnées affichées dans la section Contact de la page
            d&apos;accueil proviennent du gabarit d&apos;origine et n&apos;ont pas été
            reprises ici tant que leur exactitude n&apos;est pas confirmée.
          </p>
        </Section>

        <Section titre="2. Directeur de la publication">
          <p>
            Responsable de la publication au sens de la loi pour la confiance
            dans l&apos;économie numérique : Julien Sarrau, en sa qualité de
            représentant légal de l&apos;éditeur.
          </p>
        </Section>

        <Section titre="3. Hébergement">
          <p>
            Le site est servi depuis un serveur privé virtuel loué auprès
            d&apos;OVHcloud, physiquement situé dans le centre de données de
            Strasbourg, en France. L&apos;application y tourne dans un conteneur
            géré par Coolify.
          </p>
          <p>
            OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
            <br />
            Site : https://www.ovhcloud.com
          </p>
          <p>
            Aucune donnée liée au site n&apos;est hébergée en dehors de l&apos;Union
            européenne.
          </p>
        </Section>

        <Section titre="4. Propriété intellectuelle">
          <p>
            Les textes, la mise en page, le code et les illustrations produits
            pour ce site sont protégés par le droit d&apos;auteur. Leur reproduction
            ou leur réutilisation, totale ou partielle, requiert l&apos;accord
            préalable de l&apos;éditeur.
          </p>
          <p>
            Les marques, logos et visuels appartenant à des tiers et cités sur
            ce site restent la propriété de leurs titulaires respectifs et sont
            mentionnés à titre d&apos;illustration.
          </p>
        </Section>

        <Section titre="5. Données personnelles">
          <p>
            <strong>
              Ce site ne collecte aucune donnée personnelle auprès de ses
              visiteurs.
            </strong>{" "}
            Ce constat se vérifie dans le code source :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              aucun formulaire, aucun champ de saisie, aucune création de compte
              et aucun envoi de message depuis le site ;
            </li>
            <li>
              aucune base de données : le site est constitué de pages statiques
              et ne conserve rien entre deux visites ;
            </li>
            <li>
              aucun cookie déposé, et aucune écriture dans le stockage local ou
              de session du navigateur ;
            </li>
            <li>
              les polices de caractères sont servies depuis ce même serveur :
              aucune requête n&apos;est adressée à Google Fonts ni à un autre
              service de polices distant.
            </li>
          </ul>
          <p>
            Comme tout serveur web, l&apos;hébergeur est susceptible de conserver des
            journaux de connexion techniques (adresse IP, date et heure de la
            requête, ressource demandée) pour assurer la sécurité et le bon
            fonctionnement du service, conformément à ses obligations légales.
            Ces journaux ne sont pas exploités à des fins de profilage.
          </p>
        </Section>

        <Section titre="6. Mesure d'audience">
          <p>
            La fréquentation du site est mesurée avec Umami, un logiciel libre
            installé sur une instance auto-hébergée à l&apos;adresse
            stats.saro.app, sur la même infrastructure que le site.
          </p>
          <p>
            Umami est utilisé dans sa configuration par défaut :{" "}
            <strong>
              aucun cookie n&apos;est déposé et aucune information n&apos;est écrite ni
              lue sur le terminal du visiteur.
            </strong>{" "}
            Les mesures produites sont agrégées (page consultée, page de
            provenance, type d&apos;appareil, navigateur, pays) et ne permettent pas
            d&apos;identifier une personne. Aucune donnée n&apos;est transmise à un tiers.
          </p>
          <p>
            À ce titre, cette mesure d&apos;audience relève des traitements dispensés
            de consentement préalable. Elle est néanmoins mentionnée ici, comme
            elle doit l&apos;être.
          </p>
          <p>
            Le script de mesure n&apos;est chargé que si l&apos;identifiant de site est
            renseigné au moment de la construction de l&apos;application. Lorsqu&apos;il
            ne l&apos;est pas, aucune requête n&apos;est émise vers stats.saro.app.
          </p>
          <p>
            Durée de conservation des mesures d&apos;audience : 25 mois
          </p>
        </Section>

        <Section titre="7. Absence de tout autre service tiers">
          <p>
            En dehors de la mesure d&apos;audience décrite ci-dessus, les pages du
            site n&apos;appellent aucun service extérieur : ni Google Analytics, ni
            Google Tag Manager, ni régie publicitaire, ni bouton de réseau
            social embarqué, ni police de caractères distante. Le site ne
            recourt à aucun sous-traitant traitant des données personnelles.
          </p>
        </Section>

        <Section titre="8. Liens vers des sites tiers">
          <p>
            Le site comporte des liens vers des sites extérieurs. Une fois ces
            liens suivis, le visiteur quitte ce site et se trouve soumis aux
            conditions et aux politiques de confidentialité des sites concernés,
            sur lesquels l&apos;éditeur n&apos;exerce aucun contrôle.
          </p>
        </Section>

        <Section titre="9. Vos droits">
          <p>
            Le règlement général sur la protection des données ouvre un droit
            d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition
            et de portabilité. En l&apos;absence de collecte, ces droits n&apos;ont en
            pratique aucune donnée sur laquelle s&apos;exercer, mais toute demande
            peut être adressée à l&apos;éditeur à l&apos;adresse{" "}
            <a
              href="mailto:contact@saro.app"
              className="underline underline-offset-4"
            >
              contact@saro.app
            </a>
            .
          </p>
          <p>
            En cas de désaccord, une réclamation peut être déposée auprès de la
            Commission nationale de l&apos;informatique et des libertés, 3 place de
            Fontenoy, TSA 80715, 75334 Paris Cedex 07, www.cnil.fr.
          </p>
        </Section>

        <Section titre="10. Modification des présentes mentions">
          <p>
            Ces mentions peuvent être modifiées à tout moment pour suivre les
            évolutions du site ou de la réglementation. La version en ligne est
            la seule qui fasse foi.
          </p>
        </Section>

        <Link href="/" className="text-sm underline underline-offset-4">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
