# TwistTrip

Application web humoristique qui propose des voyages insolites avec une expérience utilisateur unique. Projet développé lors d'un hackathon en 24h.

## 📋 Description

TwistTrip est une application React qui simule une plateforme de réservation de voyages insolites et décalés. L'utilisateur est guidé à travers un parcours amusant: paiement, choix du type de voyage, sélection aléatoire de la destination via une roulette, et confirmation de réservation.

L'application joue sur le concept de "surprise" en proposant des destinations et activités inattendues, souvent humoristiques.

Ce projet a été entièrement conçu et développé lors d'un hackathon de 24 heures, démontrant la capacité à rapidement mettre en œuvre un concept créatif avec une interface fonctionnelle dans un délai très court.

## ✨ Fonctionnalités

- **Interface de navigation séquentielle** - Passage fluide entre les différentes étapes
- **Formulaire de paiement** - Simulation de paiement avec affichage de carte en temps réel
- **Sélection de catégorie** - Choix entre différents types de voyages
- **Roulette aléatoire** - Sélection ludique d'une destination avec animation
- **Billet de confirmation** - Génération d'un billet stylisé

## 🛠️ Technologies utilisées

- React 18
- Vite
- Bibliothèques spécialisées:
  - `react-credit-cards-2` pour le formulaire de paiement
  - `react-roulette-pro` pour l'animation de la roulette
  - `lottie-react` pour les animations
- Flask (backend Python) pour l'API

## 🧩 Structure du projet

```
twisttrip/
├── src/
│   ├── components/
│   │   ├── Choix.jsx           # Sélection du type de voyage
│   │   ├── Confirmation.jsx    # Billet de confirmation
│   │   ├── FlashAnimation.jsx  # Animation de flèche
│   │   ├── Homepage.jsx        # Page d'accueil
│   │   ├── Payement.jsx        # Formulaire de paiement
│   │   ├── Roulette.jsx        # Composant de roulette
│   │   └── VisaCard.jsx        # Composant de carte de crédit
│   ├── assets/                 # Images et animations
│   ├── App.jsx                 # Composant principal
│   ├── App.css                 # Styles globaux
│   └── main.jsx                # Point d'entrée
├── backend/
│   └── api_choice.py           # API Flask pour générer les destinations
└── ...
```

## 💻 Installation

1. Clonez ce dépôt
```bash
git clone git@github.com:techmefr/twisttrip.git
cd twisttrip
```

2. Installez les dépendances frontend
```bash
npm install
```

3. Lancez l'application React
```bash
npm run dev
```

4. Pour le backend (optionnel - nécessite Python)
```bash
cd backend
pip install flask flask-restful pandas
python api_choice.py
```

## 🎮 Expérience utilisateur

L'application guide l'utilisateur à travers 5 étapes principales:

1. **Accueil** - Présentation du concept avec animation
2. **Paiement** - Sélection du budget et saisie des informations de carte
3. **Choix** - Sélection d'un type de voyage (culturel, humanitaire, sportif, ressourcement)
4. **Roulette** - Sélection aléatoire d'une destination avec effet visuel
5. **Confirmation** - Billet stylisé avec les détails du voyage

## 🎨 Points forts techniques

### Gestion des états et navigation
```jsx
function App() {
  const [currentComponent, setCurrentComponent] = useState('Homepage');

  const components = ['Homepage', 'Payement', 'Choix', 'Roulette', 'Confirmation'];

  const nextComponent = () => {
    const currentIndex = components.indexOf(currentComponent);
    const nextIndex = (currentIndex + 1) % components.length;
    setCurrentComponent(components[nextIndex]);
    // ...
  };
}
```

### Intégration d'API externe (backend Python)
```python
class my_API_class(Resource):
    def get(self, price, choice):
        destination = df.loc[(df['Price'] == int(price)) & (df['Choice'] == choice)]
        destination = json.loads(destination.to_json(orient = 'records'))
        return destination
```

### Animation de roulette
```jsx
<RoulettePro
  prizes={prizeList}
  prizeIndex={prizeIndex}
  start={start}
  onPrizeDefined={handlePrizeDefined}
  soundWhileSpinning="..."
/>
```

## 📝 Licence

[MIT](https://choosealicense.com/licenses/mit/)

---

Créé par [Gaëtan Compigni](https://github.com/techmefr)
