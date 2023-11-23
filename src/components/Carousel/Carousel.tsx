import React, {useRef, useState} from 'react';
import {Animated, Image, View} from 'react-native';
import {CarouselBtn} from '..';
import metrics from '../../theme/metrics';
import {Slide} from '../../types';
import {arrayOfStrings} from '../../utils/helper';
import styles from './styles';

type Props = {
  slides: Slide[];
  blocks?: number;
  height?: number;
};

const Carousel: React.FC<Props> = ({slides, blocks = 4, height = 3}) => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  let imagesArray: string[] = arrayOfStrings(slides);

  const nextSlide = () => {
    let newCurrentImage = currentImage + 1;
    animatedConfig(newCurrentImage).start();
    setCurrentImage(newCurrentImage);
  };

  const prevSlide = () => {
    let newCurrentImage = currentImage - 1;
    animatedConfig(newCurrentImage).start();
    setCurrentImage(newCurrentImage);
  };

  const animatedConfig = (newCurrentImage: number) =>
    Animated.spring(animation.current, {
      toValue: -(metrics.screenWidth * newCurrentImage),
      useNativeDriver: true,
    });

  if (blocks < 1) {
    blocks = 1;
  }
  if (height < 1) {
    height = 1;
  }

  return (
    <React.Fragment>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{translateX: animation.current}],
          },
        ]}>
        {imagesArray.map((image, index) => (
          <View style={styles.imgContainer} key={index}>
            <Image
              source={{uri: image}}
              style={{
                height: metrics.screenHeight / height,
                width: metrics.screenWidth / blocks,
              }}
            />
          </View>
        ))}
      </Animated.View>

      <CarouselBtn
        title="<"
        onPress={prevSlide}
        style={[
          styles.btnPrev,
          currentImage === 0 ? styles.btnDisable : undefined,
        ]}
        styleText={styles.btnText}
        disabled={currentImage === 0}
      />

      <CarouselBtn
        title=">"
        onPress={nextSlide}
        style={[
          styles.btnNext,
          currentImage === Math.floor(imagesArray.length / blocks)
            ? styles.btnDisable
            : undefined,
        ]}
        styleText={styles.btnText}
        disabled={currentImage === Math.floor(imagesArray.length / blocks)}
      />
    </React.Fragment>
  );
};

export default Carousel;
