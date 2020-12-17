import { Fragment, useState, useEffect } from 'react';
import PageHeader from './components/HeaderPage/HeaderPage';
import FormSearch from './components/FormSearch/FormSearch';
import Section from './components/Section/Section';
import ImageListRender from './components/ImagesListRender/ImagesListRender';
import ServiceApi from './service/ServiceApi';
import Spinner from './components/Spinner/Spinner';
import Notification from './components/Notification/Notification';
import ErrorInfo from './service/ErrorInfo';
import Modal from './components/Modal/Modal';
import ButtonLoadMore from './components/ButtonLoadMore/ButtonLoadMore';
import LoadInfinityControl from './components/LoadInfinityControl/LoadInfinityControl';
import ButtonScrollTop from './components/ButtonScrollTop/ButtonScrollTop';

export default function App() {
  const [images, setImages] = useState([]);
  const [formSearch, setFormSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImgUrl, setLargeImgUrl] = useState(null);
  const [isFullHits, setIsFullHits] = useState(false);
  const [isInfinityScroll, setIsInfinityScroll] = useState(false);

  useEffect(() => {
    if (!formSearch) {
      return;
    }
    fethApi();
  }, [formSearch]);

  useEffect(() => {
    if (!isInfinityScroll) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [page]);

  const registrationIntersectionObserver = () => {
    const onEntries = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && formSearch !== '' && isInfinityScroll) {
          console.log('object is intersecting');
          fethApi();
        }
      });
    };
    const options = {
      rootMargin: '200px',
      threshold: 0.5,
    };
    const observerApi = new IntersectionObserver(onEntries, options);
    const trackingObj = document.querySelector('#trackingObj');
    observerApi.observe(trackingObj);
  };

  const fethApi = () => {
    setLoading(true);
    ServiceApi(formSearch, page)
      .then(data => {
        if (data.hits.length === 0) {
          ErrorInfo();
        }
        if (images.length < data.total) {
          setImages(prevImages => [...prevImages, ...data.hits]);
          setPage(prevPage => prevPage + 1);
          setIsFullHits(false);
        } else {
          setIsFullHits(true);
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlerFormSubmit = query => {
    setFormSearch(query);
    setPage(1);
    setImages([]);
    setIsFullHits(false);
  };

  const openModal = urlImgLarge => {
    setLargeImgUrl(urlImgLarge);
  };

  const closeModal = () => {
    setLargeImgUrl(null);
  };

  const handleCheckbox = checked => {
    setIsInfinityScroll(checked);
    registrationIntersectionObserver();
  };

  return (
    <Fragment>
      <PageHeader>
        <FormSearch onSearch={handlerFormSubmit} />
        <LoadInfinityControl onCheckChange={handleCheckbox} />
      </PageHeader>
      <main>
        <Section>
          {images.length > 0 && (
            <ImageListRender imagesArr={images} onGetLargeImg={openModal} />
          )}
          {loading && <Spinner />}
          {error && <Notification message={`Error loading:${error.message}`} />}
          {!loading &&
            images.length > 0 &&
            !isFullHits &&
            !isInfinityScroll && <ButtonLoadMore onLoad={fethApi} />}
          <div id="trackingObj" />
          {images.length > 0 && <ButtonScrollTop />}
        </Section>
      </main>
      {largeImgUrl && <Modal imgUrl={largeImgUrl} onCloseModal={closeModal} />}
    </Fragment>
  );
}
