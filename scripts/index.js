const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then(json => displayLesson(json.data))
}

const displayLesson = (Lessons) => {
    // 1. Get the container & Empty it
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML = ""

    // 2. Get into every lesson
    for (let lesson of Lessons) {

        //   3. Create Element
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML = `
        <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        `
        //  4. Append into container
        levelContainer.append(btnDiv)
    }

        

        
} 

loadLessons()