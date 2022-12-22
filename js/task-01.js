const numberСategories = document.querySelectorAll(".item");

console.log('Number of categories:', numberСategories.length);


numberСategories.forEach((element) => {
    const elementTitle = element.querySelector('h2').textContent;
    const oneElement = element.querySelectorAll('li');


    console.log('Category:',elementTitle);
    console.log('Elements:', oneElement.length);
});