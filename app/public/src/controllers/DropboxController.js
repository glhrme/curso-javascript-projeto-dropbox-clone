class DropboxController {
    constructor() {
        this.btnSendFileEl = document.querySelector("#btn-send-file")
        this.inputFileEl = document.querySelector("#files")
        this.snackBarEl = document.querySelector("#react-snackbar-root")
        this.initEvents()
    }

    initEvents() {
        this.btnSendFileEl.addEventListener('click',  event => {
            this.inputFileEl.click()
        })

        this.inputFileEl.addEventListener('change', event => {
            console.log(event.target.files)
            this.snackBarEl.style.display = 'block'
        })
    }
}