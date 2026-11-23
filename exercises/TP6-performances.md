# 🏎️ TP6 — Speedrun performance

Une image lourde ralentit peut-être la billetterie. Commencez par mesurer, sans toucher au code.

## 🟢 Niveau 1 — Trouver le poids lourd

1. Ouvrez l’accueil, appuyez sur **F12** et cliquez **Network** (Réseau).
2. Cliquez le filtre **Img**, puis rechargez la page.
3. Triez par **Size** et notez le poids de la plus grosse image.
4. **Réussi :** relevez la ligne Network et son poids.

## 🟡 Niveau 2 — Optimiser

1. Dans Network, ouvrez la plus grosse image dans un nouvel onglet; ouvrez la console DevTools.
2. Pour la correction, utilisez l’image du hero `Horizon.png` : convertissez-la en WebP avec le snippet ci-dessous; enregistrez le fichier dans `public/assets/`.
3. Dans `src/components/Hero.tsx`, remplacez le chemin de l’image; vérifiez l’affichage et le texte alternatif.
4. Rechargez avec Network ouvert : comparez les poids avant/après. **Réussi :** l’image s’affiche et la ressource demandée est plus légère.

```js
const i=new Image();i.src='/assets/Horizon.png';i.onload=()=>{const c=document.createElement('canvas');c.width=i.naturalWidth;c.height=i.naturalHeight;c.getContext('2d').drawImage(i,0,0);c.toBlob(b=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='Horizon.webp';a.click()},'image/webp',0.82)}
```

## 🔴 Niveau 3 — Bonus : page stable

Sur l’accueil, ralentissez le réseau dans Network, cochez **Disable cache**, puis rechargez. Observez le hero `Horizon.webp` : aucun espace n’est réservé avant son chargement, donc le contenu situé dessous se déplace. Dans `Hero.tsx` et le CSS du hero, réservez l’espace avec un ratio ou une hauteur stable, puis comparez dans Performance.

**Score rapide :** 1 image repérée · 1 poids avant/après · 1 image optimisée et visible · +1 bonus CLS ou interaction. Le poids réduit ne garantit pas à lui seul un meilleur LCP.

## Référence facultative

Un poids plus faible peut réduire les données transférées; mesurez le LCP avant/après pour savoir si l’élément principal en bénéficie. Réserver la géométrie d’une image évite un déplacement (CLS). Une longue tâche JavaScript peut bloquer les entrées et affecter la réactivité; une trace locale ne mesure pas à elle seule l’INP terrain. Comparez dans des conditions identiques.
