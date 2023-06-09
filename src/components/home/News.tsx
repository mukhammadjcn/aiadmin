import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { INews } from "types/index";
import { CalendarSvg } from "../svg";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

function HomeNews({ news }: { news: INews[] }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const GiveTrans = (news: INews, title = true) => {
    const lang = localStorage.getItem("lang") ?? "RU";
    if (title) {
      return lang == "RU"
        ? news?.titleRU
        : lang == "EN"
        ? news?.titleEN
        : news?.titleUZ;
    }
    return lang == "RU"
      ? `${news?.textRU?.split(" ").slice(0, 30).join(" ")} ...`
      : lang == "EN"
      ? `${news?.textEN?.split(" ").slice(0, 30).join(" ")} ...`
      : `${news?.textUZ?.split(" ").slice(0, 30).join(" ")} ...`;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      <div className="home-news-content">
        <Link to={`/blog/${news[0]?.id}`} onClick={() => window.scrollTo(0, 0)}>
          <div
            className={`home-news-content-left ${
              loading ? "loading-left" : ""
            }`}
          >
            <div className="wrap">
              <img src={news[0]?.documentResponses[0]?.fileUrl} />
              <LoadingOutlined />
            </div>

            <div className="home-news-content-box">
              <div className="home-news-content-box-wrap">
                <div className="home-news-content-box-header">
                  {GiveTrans(news[0])}
                </div>
                <div className="home-news-content-box-footer">
                  <CalendarSvg />
                  {new Date(news[0]?.createdDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div
          className={`home-news-content-right ${
            loading ? "loading-right" : ""
          }`}
        >
          <Link
            to={`/blog/${news[1]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="home-news-content-right-card">
              <div className="wrap">
                <img src={news[1]?.documentResponses[0]?.fileUrl} />
                <LoadingOutlined />
              </div>
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {GiveTrans(news[1])}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(news[1]?.createdDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to={`/blog/${news[2]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="home-news-content-right-card">
              <div className="wrap">
                <img src={news[2]?.documentResponses[0]?.fileUrl} />
                <LoadingOutlined />
              </div>
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {GiveTrans(news[2])}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(news[2]?.createdDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="home-news-carousel">
        <Carousel dotPosition="top">
          <Link
            to={`/blog/${news[0]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={`home-news-content-right-card ${
                loading ? "loading-carosel" : ""
              }`}
            >
              <div className="wrap">
                <img src={news[1]?.documentResponses[0]?.fileUrl} />
                <LoadingOutlined />
              </div>
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("home.news1")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(news[0]?.createdDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={`/blog/${news[1]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={`home-news-content-right-card ${
                loading ? "loading-carosel" : ""
              }`}
            >
              <div className="wrap">
                <img src={news[2]?.documentResponses[0]?.fileUrl} />
                <LoadingOutlined />
              </div>
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("home.news2")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(news[1]?.createdDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={`/blog/${news[2]?.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div
              className={`home-news-content-right-card ${
                loading ? "loading-carosel" : ""
              }`}
            >
              <div className="wrap">
                <img src={news[3]?.documentResponses[0]?.fileUrl} />
                <LoadingOutlined />
              </div>
              <div className="home-news-content-box">
                <div className="home-news-content-box-wrap">
                  <div className="home-news-content-box-header">
                    {t("home.news3")}
                  </div>
                  <div className="home-news-content-box-footer">
                    <CalendarSvg />{" "}
                    {new Date(news[2]?.createdDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
    </>
  );
}

export default HomeNews;
