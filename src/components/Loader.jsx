import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {

    const { progress } = useProgress();

    return (
        <Html
            as='div'>
            <span className="canvas-load"></span>
            <p
                style={{
                    fontSize: 14,
                    color: 'rgb(240, 246, 252)',
                    fontWeight: 800,
                    marginTop: 40
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    )
}

export default CanvasLoader;