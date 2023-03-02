
import { OrbitControls, OrthographicCamera, useAnimations, useFBX, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Spin } from 'antd'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import * as THREE from 'three'
// import { NormalText } from '../TextSize'
const NFT3D = ( {
  models,
  close3D,
  texTure,
  intensity = 0.5,
  minHeight = 350
} ) => {
  const orbitControlsRef = useRef( null )
  const messages = useSelector( ( state ) => state.locale.messages )
  const [isLoad, setIsLoad] = useState( true )
  const closeCanvas = () => {
    const div3d = document.getElementById( 'nft-3d' )
    while ( div3d.firstChild ) {
      div3d.removeChild( div3d.firstChild )
    }
    close3D()
  }
  console.log( { models } )
  return (
    <Container minHeight={minHeight} >
      <Close3D onClick={isLoad ? null : () => closeCanvas()}>
        <TextClose>
          {isLoad ? messages.common['3DLoading'] : messages.common.close3D}
        </TextClose>
        {isLoad && (
          <ContainerLoading >
            <Spin size='large' style={{ marginTop: '30%' }} indicator={antIcon} />

          </ContainerLoading>
        )}
      </Close3D>
      <ContainerCanvas id='nft-3d' minHeight={minHeight} >
        <CanvasCustom scaleModal={1}>
          <PointLights />
          <Suspense fallback={null}>
            <Scene
              intensity={intensity}
              modal={models}
              texTure={texTure}
              isLoad={isLoad}
              setIsLoad={setIsLoad}
            />
          </Suspense>

          <OrthographicCamera
            name='camera'
            makeDefault
            scale={[0.9, 0.9, 0.9]}
            near={0}
            far={200000}
            position={[0, 0, 20]}
            zoom={80}
          />
          <OrbitControls
            enablePan={false}
            ref={orbitControlsRef}
            target={[0, 2, 0]}
            minDistance={3}
            maxDistance={5}
            maxZoom={window.innerWidth > 768 ? 130 : 120}
            minZoom={50}
            zoom0={200}
          />
        </CanvasCustom>
      </ContainerCanvas>
    </Container>
  )
}
const Scene = ( {
  isLoad,
  setIsLoad,
  modal,
  texTure,
  intensity
} ) => {
  const propellerMesh = useRef()
  const listAction = useRef( [] )
  const colorMap = useTexture( texTure )
  colorMap.minFilter = 0
  const material = new THREE.MeshStandardMaterial( {
    lightMap: colorMap,
    map: colorMap,
    lightMapIntensity: intensity
  } )
  const fbx = useFBX( modal )
  const { actions } = useAnimations( fbx.animations, propellerMesh )

  useEffect( () => {
    colorMap.minFilter = THREE.NearestFilter
    const loadPropertyModal = () => {
      fbx?.traverse( ( ob ) => {
        ob.material = material
      } )
      fbx.animations.map( ( ob, index ) => {
        if ( !listAction.current.includes( ob.name ) ) {
          listAction.current.push( ob.name )
        }
      } )
    }
    loadPropertyModal()
  }, [] )
  useEffect( () => {
    if ( !isLoad ) {
      actions[listAction.current[0]]?.fadeIn( 0.5 )?.play()
    }
  }, [actions, isLoad] )
  return (
    <mesh
      onUpdate={( ) => { if ( isLoad ) { setIsLoad( false ) } }}
      ref={propellerMesh}
    >
      {/* <axesHelper /> */}
      <primitive object={fbx} scale={0.035} />

    </mesh>

  )
}

export default React.memo( NFT3D )
const PointLights = () => {
  const intensity = 0.35
  return ( <>
    <pointLight
      rotation={[100, 10, 0]}
      position={[1000, 100, 200]}
      intensity={intensity}
    />
    <pointLight
      rotation={[100, 10, 0]}
      intensity={intensity}
    />
    <pointLight
      position={[100, 100, 200]}
      intensity={intensity}
    />
    <pointLight
      rotation={[100, 10, 0]}
      position={[-1000, 100, 200]}
      intensity={intensity}
    />
    <pointLight
      rotation={[100, 10, 0]}
      position={[-10, 1, -1000]}
      intensity={intensity}
    />
  </>
  )
}
const antIcon = (
  <img src={images.icLoading} width={70} />

)
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${props => props.minHeight}px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Close3D = styled.div`
position:relative;
  font-size: 16px;
  color: ${COLOR.purple};
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  text-align: center;
  cursor: pointer;
  z-index: 10;
  @media screen and (max-width: 568px) {
    font-size: 12px;
  }
  &:hover {
    cursor: pointer;
  }
`
const ContainerCanvas = styled.div`
  width: 100%;
  height: 100%;
  min-height: ${props => props.minHeight}px;
  position: relative;
  transform: scale(1.5);
  overflow: hidden;
  @media screen and (max-width: 768px) {
  
  }
`
const CanvasCustom = styled( Canvas )`
  position: absolute !important;
  z-index: 2;
  transform: scale(1.5);
  width: 120% !important;
  height: 120% !important;
  left: -10%;
  top: -10%;
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`
const ContainerLoading = styled.div`
  position:absolute;

  --color: ${COLOR.white2}; /* color */
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  border: ${( props ) => ( props.border ? '1px solid var(--color)' : 'none' )};
  border-radius: 16px;
  margin-top: ${( props ) => ( props.border ? '26px' : '0px' )};
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column wrap;
  }
  gap: 20px;
`

const TextClose = styled.div`
  color: #c4a5f8;
  position: absolute;
  top:16px;
  width:100%;
  

`
