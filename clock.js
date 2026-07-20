document.body.classList.add('m-50', 'h-100vh', 'flex', 'justify-center', 'items-center', 'bg-gray-300');

const clock = document.createElement('div');
clock.classList.add('p-5','border', 'border-black-500', 'rounded', 'shadow-[34,211,238,0.4]','bg-white');
document.body.appendChild(clock);

const time = document.createElement('h1');
time.classList.add('text-4xl', 'font-bold', 'text-blue-500');

const dateText = document.createElement('p');
dateText.classList.add('text-lg','text-blue-500','mt-2');

clock.appendChild(time);
clock.appendChild(dateText);
setInterval(updateClock, 1000);

function updateClock() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    dateText.textContent = `${day.toString().padStart(2, '0')} ${month.toString().padStart(1, '')}, ${year}`;

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    time.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
}

const saveButton = document.createElement('button');
saveButton.textContent = 'Stop Time';
saveButton.classList.add('mt-4', 'px-4', 'py-2', 'bg-blue-700', 'text-white', 'rounded');
clock.appendChild(saveButton);

const savedTimesList = document.createElement('ul');
savedTimesList.classList.add('m-10', 'p-10', 'mt-4', 'list-disc', 'pl-5', 'text-BLACK');
document.body.appendChild(savedTimesList);

saveButton.addEventListener('click', () => {
    const savedTime = document.createElement('li');
    savedTime.textContent = time.textContent;
    savedTimesList.appendChild(savedTime);
});