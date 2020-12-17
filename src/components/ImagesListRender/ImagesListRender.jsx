import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faThumbsUp,
  faSave,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
  List,
  ListItem,
  Image,
  Overlay,
  StatisticBlock,
  StatisticItem,
  IcoView,
} from './StyledComponent';
import DefaultImage from '../../image/default-image.jpg';

export default function ImageListRender({ imagesArr, onGetLargeImg }) {
  return (
    <List>
      {imagesArr.map(
        ({
          id,
          webformatURL = DefaultImage,
          largeImageURL,
          tags,
          likes,
          views,
          downloads,
        }) => (
          <ListItem key={id} onClick={() => onGetLargeImg(largeImageURL)}>
            <Overlay className="overlay">
              <IcoView>
                {' '}
                <FontAwesomeIcon icon={faSearch} color="green" size="3x" />
              </IcoView>
              <StatisticBlock>
                <StatisticItem>
                  <FontAwesomeIcon icon={faEye} color="green" /> {views}
                </StatisticItem>
                <StatisticItem>
                  <FontAwesomeIcon icon={faThumbsUp} color="green" /> {likes}
                </StatisticItem>
                <StatisticItem>
                  <FontAwesomeIcon icon={faSave} color="green" /> {downloads}
                </StatisticItem>
              </StatisticBlock>
            </Overlay>
            <Image src={webformatURL} alt={tags} />
          </ListItem>
        ),
      )}
    </List>
  );
}

ImageListRender.propTypes = {
  imagesArr: PropTypes.array.isRequired,
  onGetLargeImg: PropTypes.func.isRequired,
};
