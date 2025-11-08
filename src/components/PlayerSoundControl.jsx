import {useEffect, useState} from "react";
import {Slider} from "@/components/Slider";

export const PlayerSoundControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    audio.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])


  //cada vez que cambia el timeupdate se sincroniza el estado
  const handleTimeUpdate = () => {

    //indica en qué segundo exacto va la reproducción.
    setCurrentTime(audio.current.currentTime)
  }



  //formatear para que se muestre en minutos
  const formatTime = time => {
    if (time == null) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    //cadenas de texto de 2 espacios
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  //duracion maxima completa de la cancion
  const duration = audio?.current?.duration ?? 0

  return (
    <div className="flex gap-x-3 text-xs pt-2">
      <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>

      <Slider
        //el slider avanza 
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        className="w-[600px]"
        onValueChange={(value) => {
          const [newCurrentTime] = value
          audio.current.currentTime = newCurrentTime
        }}
      />

      <span className="opacity-50 w-12">
        {duration ? formatTime(duration) : '0:00'}
      </span>
    </div>
  )
}


/* 1 El <audio> emite un evento timeupdate varias veces por segundo.

   2 Ese evento ejecuta handleTimeUpdate.

   3 handleTimeUpdate guarda el tiempo actual en el estado currentTime.

  4 React vuelve a renderizar mostrando el nuevo tiempo y moviendo el slider. */