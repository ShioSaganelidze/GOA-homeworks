let day = Number(prompt('Choose any day of the week'));

switch(day) {
    case 1:
        alert('ორშაბათი');
        break;
    case 2:
        alert('სამშაბათი');
        break;
    case 3:
        alert('ოთხშაბათი');
        break;
    case 4:
        alert('ხუთშაბათი');
        break;
    case 5:
        alert('პარასკევი');
        break;
    case 6:
        alert('შაბათი');
        break;
    case 7:
        alert('პარასკევი');
        break;
    default:
        alert('Invalid input');
};

let month = prompt('Enter any month of the year');
switch(month.toLowerCase()) {
    case 'მარტი' || 'აპრილი' || 'მაისი':
        alert('გაზაფხული');
        break;
    case 'ივნისი' || 'ივლისი' || 'აგვისტო':
        alert('ზაფხული');
        break;
    case 'სექტემბერი' || 'ოქტომბერი' || 'ნოემბერი':
        alert('შემოდგომა');
        break;
    case 'დეკემბერი' || 'იანვარი' || 'თებერვალი':
        alert('ზამთარი');
        break;
};

let GD = prompt(`შეიყვანეთ თქვენი სქესი (M or F)`);
switch(GD.toLowerCase()) {
    case 'm':
        alert('მამრობითი');
        break;
    case 'f':
        alert('მდედრობითი');
        break;
    default:
        alert('Enter a valid gender not Optimus Prime gender')
};