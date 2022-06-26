import React, { useEffect, useState } from 'react';
import ItemCard from '../../components/ItemCard/ItemCard';
import AdCard from './AdCard/AdCard';
import UseALink from './UseALink/UseALink';
import './DashBoard.scss';

const DashBoard = props => {
  const [items, setItems] = useState([]);
  const [recommendItems, setRecommendItems] = useState([]);

  useEffect(() => {
    fetch('/data/perfumes.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });

    fetch('/data/recommends.json')
      .then(res => res.json())
      .then(data => {
        setRecommendItems(data);
      });
  }, []);

  return (
    <div className="dashBoard">
      <div className="dashBoardWrapper">
        <div className="dashBoardImg">
          <div className="dashBoardInfo">
            <header>
              <h2>호기심으로 물든 일곱 가지 아로마</h2>
              <h1>몸과 마음에 머무는 아로마</h1>
            </header>
            <p>
              자아와 감각을 깨우는 아로마의 이솝 오 드 퍼퓸은 조향에 대한
              일반적인 관행을 따르지 않는 미묘한 차이의 접근법으로 만들어집니다
            </p>
            <div className="goToPerfume">
              <UseALink theme="dark" text="향수 보기" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="fragranceWrapper">
          {items.map(({ id, img, name, feature_name }) => {
            return (
              <ItemCard
                key={id}
                itemPhoto={img}
                itemName={name}
                itemDescription={feature_name}
              />
            );
          })}
        </div>
        <div className="historyWrapper">
          <AdCard
            topTitle="더 아테네움"
            title="향수의 역사"
            description="초기 사내 실험에서 가장 최근 제품에 이르기까지: 에센셜 오일,
                인내, 향수 제조학에 관한 이야기"
            plusInfo="더 보기"
          />
          <video className="dashBoardVideo" muted autoPlay loop>
            <source src="/images/abc.mp4" type="video/mp4" />
            <strong>Your browser does not support the video tag.</strong>
          </video>
        </div>
        <div className="travelWrapper">
          <AdCard
            topTitle="한정 출시"
            title="이솝 & 릭 오웬스 트래블 키트"
            description="향기와 스타일을 추구하고 자신만의 길을 개척하려는 사람을 위한 키트로 톡 쏘는 향기가 단연 돋보이는 오 드 뚜왈렛과 세라믹 비즈, 릭 오웬스가 큐레이팅한 헤어와 바디 케어 필수품으로 구성되어 있습니다."
            plusInfo="트래블 키트 보기"
          />
          <img src="/images/perfumephoto.avif" alt="perfumephoto" />
        </div>
        <div className="goodChoice">
          <h2>탁월한 셀렉션</h2>
        </div>
        <div className="goodChoiceWrapper">
          {recommendItems.map(({ id, img, name, feature_name }) => {
            return (
              <ItemCard
                key={id}
                itemPhoto={img}
                itemName={name}
                itemDescription={feature_name}
              />
            );
          })}{' '}
        </div>
        <div className="closeStore">
          <AdCard
            title="스토어 로케이터"
            description="
            매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.  "
            plusInfo="가까운 스토어 찾기"
          />
          <img src="/images/storephoto.jpg" alt="storephoto" />
        </div>
        <div className="bottomQuote">
          <p className="quote">‘Fragrance is the voice of inanimate things.’</p>
          <p className="cite">Mary Webb</p>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
