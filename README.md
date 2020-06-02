# carbonisep

Par l'équipe **Triangle des Bermudes**

## Installation

1. Installer Node.js et npm

**Windows**

> Télécharger l'installer Node.js [ici](https://nodejs.org/dist/v14.4.0/node-v14.4.0-x64.msi), puis l'exécuter.

> Pour vérifier l'installation, ouvrir un terminal et y écrire `node -v` et `npm -v`, cela devrait afficher les versions de node et npm.

**Ubuntu**

> ```bash
> curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
> sudo apt-get install -y nodejs
> ```

# À modifier car seulement accessible aux contributeurs

omni

2. Télécharger le zip du projet depuis github [ici](https://github.com/omnitrogen/carbonisep/archive/integration.zip)

3. Extraire le zip et ouvrir un terminal dans le dossier `carbonisep-integration`

(Pour Windows, aller avec l'explorateur de fichier dans le dossier `carbonisep-integration` puis clic droit > Ouvrir un terminal ici.)

4. Lancer les commandes :

(Commande à rentrer seulement pour Windows. Cela permet d'installer des outils qui servent à compiler les bibliothèques node js.) :

```bash
npm install --global --production windows-build-tools # only for Windows
```

Et enfin pour installer les bibliothèques et lancer les serveurs front et back :

```bash
npm i
npm run installDeps # might be long
npm run start
```

L'application devrait s'ouvrir sur <http://localhost:3000>.
