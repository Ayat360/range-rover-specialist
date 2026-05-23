import { useEffect } from "react"

export default function useSound() {

  useEffect(() => {

    const clickSound = new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-1114.mp3"
    )

    const buttons = document.querySelectorAll(".magnetic")

    buttons.forEach(btn => {

      btn.addEventListener("click", () => {
        clickSound.currentTime = 0
        clickSound.play()
      })

    })

  }, [])

}