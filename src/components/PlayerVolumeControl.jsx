import { usePlayerStore } from "@/store/playerStore"
import { useRef, useState } from "react"
import { Slider } from "@/components/Slider"
import { PlayerVolumeIconComponent } from "@/components/PlayerVolumeIconComponent";
import { Dispositivos } from "@/icons/Dispositivos";


export const PlayerVolumeControl = () => {
  const volume = usePlayerStore(state => state.volume)
  const setVolume = usePlayerStore(state => state.setVolume)
  const previousVolumeRef = useRef(volume)
  const [showDevices, setShowDevices] = useState(false)

  const isVolumeSilenced = volume < 0.1

  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current)
    } else {
      previousVolumeRef.current = volume
      setVolume(0)
    }
  }

  const handleClickDispositivos = () => {
    setShowDevices(!showDevices)
  }

  return (
        
    <div className="flex items-center justify-center gap-x-2 text-white mr-12 relative">
      <div className="relative flex items-center">
        <button 
          className="opacity-70 hover:opacity-100 transition mr-2"
          onClick={handleClickDispositivos}
        >
          <Dispositivos />
        </button>

        {showDevices && (
          <>
            {/* Overlay para cerrar al hacer click fuera */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setShowDevices(false)}
            />
            
            {/* Popover */}
            <div className="absolute bottom-full right-0 mb-2 w-64 bg-[#282828] rounded-lg shadow-xl z-50 p-4">
              {/* Flecha del popover */}
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#282828] transform rotate-45"></div>
              
              {/* Contenido */}
              <div className="relative">
                <h3 className="text-white font-semibold text-base mb-3">
                  Conectar a un dispositivo
                </h3>
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <Dispositivos />
                  <p className="text-white text-sm mt-4 mb-2">
                    Sin dispositivos vinculados
                  </p>
                  <p className="text-gray-400 text-xs">
                    Abre Spotify en tu teléfono, tablet u otro dispositivo para conectarte
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <button className="opacity-70 hover:opacity-100 transition" onClick={handleClickVolumen}>
        <PlayerVolumeIconComponent />
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px]"
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100
          setVolume(volumeValue)
        }}
      />
    </div>
  )
}