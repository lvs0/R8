# R8 - Ad Scrolling Experience

Une plateforme web moderne pour le défilement automatique de publicités avec intégration A-Ads, lecteur de musique en arrière-plan (YouTube/Spotify), et techniques anti-ban avancées.

## 🚀 Fonctionnalités

### 📢 Gestion des Publicités
- **Intégration A-Ads**: Unités publicitaires intégrées avec ID 2446746
- **Défilement Automatique**: Système de scroll automatisé avec contrôle de vitesse
- **Multi-ads**: 5 unités publicitaires pour maximiser les vues
- **Statistiques en temps réel**: Suivi des pubs vues, temps de défilement, et gains estimés

### 🎵 Musique en Arrière-plan
- **YouTube Music**: Intégration complète avec support des playlists
- **Spotify**: Lecteur intégré pour les tracks et playlists
- **Suggestions Rapides**: Playlists pré-configurées (Lofi, Chill, Focus, Energy)
- **Lecture Continue**: Musique qui continue pendant le défilement des pubs

### 🛡️ Techniques Anti-Ban
- **Défilement Naturel**: Simulation de comportement humain
- **Pauses Aléatoires**: Temps de pause variables entre 2-5 secondes
- **Vitesse Variable**: Randomisation automatique de la vitesse
- **Mouvements de Souris**: Simulation de mouvements aléatoires
- **Scroll Events**: Événements de scroll aléatoires pour éviter la détection
- **Reset Intelligent**: Retour au début avec pause prolongée

### 💎 Interface Moderne
- **Design Glassmorphism**: Interface élégante avec effets de flou
- **Gradient Animé**: Arrière-plan avec dégradés dynamiques
- **Responsive**: Adapté pour mobile et desktop
- **Navigation Fluide**: Scroll smooth entre sections
- **Raccourcis Clavier**: Espace pour démarrer/arrêter le scroll

## 📋 Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion internet active
- (Optionnel) Comptes YouTube/Spotify pour la musique

## 🛠️ Installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/lvs0/R8.git
cd R8
```

2. **Ouvrir le fichier**
Ouvrez simplement `index.html` dans votre navigateur

Ou utilisez un serveur local:
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (après npm install -g http-server)
http-server -p 8000
```

3. **Accéder à l'application**
Ouvrez `http://localhost:8000` dans votre navigateur

## 🎖️ Utilisation

### Défilement des Publicités

1. **Naviguer vers la section "Pubs"**
2. **Ajuster la vitesse** avec le slider (1-10)
3. **Cliquer sur "Démarrer"** pour commencer le défilement automatique
4. **Observer les statistiques** en temps réel
5. **Cliquer sur "Arrêter"** pour mettre en pause

**Raccourci clavier**: Appuyez sur `Espace` pour démarrer/arrêter

### Musique en Arrière-plan

**Option 1 - YouTube**:
1. Collez une URL YouTube dans le champ prévu
2. Cliquez sur "Lire YouTube"
3. La musique démarre automatiquement

**Option 2 - Spotify**:
1. Collez une URL Spotify dans le champ prévu
2. Cliquez sur "Lire Spotify"
3. Le lecteur Spotify s'affiche

**Option 3 - Suggestions Rapides**:
Cliquez sur l'une des suggestions:
- 🎵 Lofi Beats
- 🌊 Chill Vibes
- 🎯 Focus Music
- ⚡ Energy Boost

### Statistiques

La section "Stats" affiche:
- **Pubs Vues**: Nombre d'unités publicitaires vues
- **Temps de Défilement**: Durée totale de la session
- **Gains Estimés**: Revenus approximatifs générés

## 🔧 Configuration

### Modifier les Paramètres Anti-Ban

Dans `script.js`, ajustez `antiBanConfig`:

```javascript
const antiBanConfig = {
    minPause: 2000,        // Pause minimum (ms)
    maxPause: 5000,        // Pause maximum (ms)
    minScroll: 50,         // Scroll minimum (px)
    maxScroll: 150,        // Scroll maximum (px)
    randomizeSpeed: true,  // Randomiser la vitesse
    simulateHuman: true    // Simuler comportement humain
};
```

### Ajouter des Unités Publicitaires

Dans `index.html`, dupliquez un bloc ad-frame:

```html
<div class="ad-frame glass-card rounded-2xl p-6">
    <div class="text-sm text-gray-400 mb-2">Publicité #X</div>
    <div id="frameX" style="width: 100%; margin: auto; position: relative; z-index: 99998;">
        <iframe data-aa='2446746' src='//acceptable.a-ads.com/2446746/?size=Adaptive'
            style='border:0; padding:0; width:70%; height:auto; overflow:hidden;display: block;margin: auto'></iframe>
    </div>
</div>
```

### Personnaliser les Playlists

Dans `script.js`, modifiez l'objet `playlists`:

```javascript
const playlists = {
    custom: {
        youtube: 'VIDEO_ID',
        spotify: 'https://open.spotify.com/playlist/PLAYLIST_ID'
    }
};
```

## 🎨 Personnalisation

### Couleurs

Modifiez les classes TailwindCSS dans `index.html`:
- `gradient-bg`: Arrière-plan principal
- `glass-card`: Effet glassmorphism
- `glow`: Effets de lueur

### Police

Changez la police dans `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=VOTRE_POLICE&display=swap" rel="stylesheet">
```

Puis modifiez le CSS:
```css
* {
    font-family: 'VOTRE_POLICE', sans-serif;
}
```

## ⚠️ Avertissements

- **Utilisation Responsable**: Ce tool est conçu pour des fins de démonstration et d'apprentissage
- **Respect des TOS**: Assurez-vous de respecter les conditions d'utilisation des plateformes publicitaires
- **Pas de Garantie**: Les gains estimés sont approximatifs et non garantis
- **Risque de Bannissement**: Même avec les techniques anti-ban, il existe un risque de détection

## 📊 Architecture

```
R8/
├── index.html          # Page principale avec structure et styles
├── script.js           # Logique JavaScript (scroll, musique, stats)
├── README.md           # Documentation
└── package.json        # Configuration Node.js (optionnel)
```

## 🔮 Fonctionnalités Futures

- [ ] Authentification utilisateur
- [ ] Sauvegarde des préférences
- [ ] Historique des sessions
- [ ] Mode nuit/jour
- [ ] Support de plus de plateformes musicales
- [ ] Dashboard avancé avec graphiques
- [ ] Export des statistiques

## 🤝 Contribution

Les contributions sont les bienvenues! N'hésitez pas à:
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est fourni tel quel pour des fins éducatives.

## 📧 Contact

Pour toute question ou suggestion, ouvrez une issue sur le dépôt GitHub.

---

**Note**: Ce projet utilise l'intégration A-Ads pour la monétisation. Assurez-vous de respecter leurs politiques d'utilisation.

**Fait avec ❤️ pour une expérience sans interruption**
