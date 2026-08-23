export const sceneTheme = {
    colors: {
        violet: '#a78bfa',
        blue: '#58a6ff',
        cyan: '#67e8f9',
        green: '#6ee7b7',
        background: '#0d1117',
        panel: '#0a1018',
    },
    camera: {
        position: [0, 0, 6.4],
        fov: 42,
        near: 0.1,
        far: 200,
    },
    dpr: [1, 1.35],
    motion: {
        drift: 0.08,
        floatFrequency: 0.48,
        floatAmplitude: 0.07,
    },
};

export const SceneLights = () => (
    <>
        <ambientLight intensity={1.05} />
        <directionalLight position={[4, 5, 5]} intensity={1.9} />
        <pointLight position={[-4, -2, 3]} intensity={1.3} color={sceneTheme.colors.blue} />
        <pointLight position={[4, 2, 2]} intensity={0.95} color={sceneTheme.colors.violet} />
    </>
);
