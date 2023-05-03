import Swal from 'sweetalert2';

export function FireAlert(Question) {
    return Swal.fire({
        title: Question.title,
        text: Question.text,
        icon: Question.icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    })
}
