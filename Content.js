const image =
  'https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif';
const text = 'You were Rickrolled';

const replaceImages = () => {
  document.querySelectorAll('img').forEach((img) => (img.src = image));
};

const replaceText = () => {
  const elements = [
    ...document.querySelectorAll('a'),
    ...document.querySelectorAll('p'),
    ...document.querySelectorAll('span'),
    ...document.querySelectorAll('h1'),
    ...document.querySelectorAll('h2'),
    ...document.querySelectorAll('h3'),
    ...document.querySelectorAll('h4'),
    ...document.querySelectorAll('h5'),
    ...document.querySelectorAll('h6'),
  ];
  elements.forEach((element) => {
    if (element.childNodes.length > 0) {
      element.childNodes.forEach((childNode) => {
        if (childNode.nodeType === 3) {
          childNode.nodeValue = text;
        }
      });
    }
  });
};

replaceImages();
replaceText();

new MutationObserver(() => {
  replaceImages();
  replaceText();
}).observe(document.body, { childList: true, subtree: true });
