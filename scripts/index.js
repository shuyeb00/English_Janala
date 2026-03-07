const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then(json => displayLesson(json.data))
}

const removeActive = () => {
    const lessonBtn = document.querySelectorAll('.lesson-btn')
    lessonBtn.forEach(btn => btn.classList.remove('active'))
}

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            removeActive()
            const clickedBtn = document.getElementById(`lesson-btn-${id}`)
            clickedBtn.classList.add('active')
            displayWordLevel(json.data)
        })
}


const displayWordLevel = (words) => {
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = ""

    if (words.length < 1) {
        wordContainer.innerHTML = `
         <div class="text-center col-span-full space-y-4 font-bangla">
           <img class="mx-auto" src="assets/alert-error.png" alt="">
            <p class="text-gray-600 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
        </div>
        `
    }

    words.forEach(word => {
        const card = document.createElement("div")
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "Not Found!"}</h2>
            <p class="font-semibold ">Meaning / Pronunciation</p>
            <div class="font-bangla text-2xl font-medium">"${word.meaning ? word.meaning : "Not Found!"} / ${word.pronunciation ? word.pronunciation : "Not Found!"}"</div>
            <div class="flex justify-between items-center">
                <button onclick = "my_modal_5.showModal()" class="btn"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            
        </div>
        `
        wordContainer.appendChild(card)
    })
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
        <button id = "lesson-btn-${lesson.level_no}" onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}</button>
        `
        //  4. Append into container
        levelContainer.append(btnDiv)
    }




}

loadLessons()