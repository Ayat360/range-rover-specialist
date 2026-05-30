import { useEffect } from "react"

export default function useSound() {

  useEffect(() => {

    const buttons = document.querySelectorAll(".magnetic")

    buttons.forEach(btn => {

      btn.addEventListener("click", () => {

        const clickSound = new Audio(
          "https://assets.mixkit.co/sfx/preview/mixkit-mouse-click-1114.mp3"
        )

        clickSound.volume = 0.3

        clickSound.play()

      })

    })

  }, [])

}