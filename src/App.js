import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Image, Button, Card, Modal, Carousel, List, Typography, Divider } from 'antd';
import logo from './images/logo_name2.png';
import email from './images/email.png';
import instagram from './images/instagram.png';
import bg from './images/bg.jpg';
import cardrepair from './images/services/cardrepair.png';
import consultation from './images/services/consultation.png';
import fund from './images/services/fund.png';
import cash from './images/payment/cash.png';
import cashapp from './images/payment/cashapp.png';
import stripe from './images/payment/stripe.png';
import zelle from './images/payment/zelle.png';
import useWindowDimensions from './components/useWindowDimensions';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

// tab for payment options: stripe (3% fee), zelle, or cash (meetups), cashapp.

function App() 
{
  const services =
  [
    {
      service: 'Credit Repair',
      desc: 'We manages the dispute process against the credit bureaus and creditors on behalf of our clients.',
      image: cardrepair,
      // payment_link: 'https://buy.stripe.com/4gw5lH2BZgc45447ss'
    },
    {
      service: 'Credit Consultation',
      desc: 'We provide advise on ways to manage your credit.',
      image: consultation,
      // payment_link: 'https://buy.stripe.com/4gw5lH2BZgc45447ss'
    },
    {
      service: 'Funding Help',
      desc: "We help our client's receive funding to help them build out their business",
      image: fund,
      // payment_link: 'https://buy.stripe.com/4gw5lH2BZgc45447ss'
    }
  ]

  const payment_options =
  [
    {
      name: "Stripe",
      image: stripe
    },
    {
      name: "Zelle",
      image: zelle
    },
    {
      name: "Cash App",
      image: cashapp
    },
    {
      name: "Cash",
      image: cash
    }
  ]

  const lowWidth = useWindowDimensions().width > 630 ? false : true;

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div style={{float: 'left', width: '260px', height: '50px', margin: '8px 24px 16px 0', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <h1 style={{color: 'white', textTransform: 'uppercase', margin: '0px 0px 0px 5px'}}>prestige consulting</h1>
        </div>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><a href='#home' style={{color: 'white'}}>HOME</a></Menu.Item>
          <Menu.Item key="2"><a href='#info' style={{color: 'white'}}>INFORMATION</a></Menu.Item>
          {/* <Menu.Item key="4"><a href='#payment' style={{color: 'white'}}>PAYMENT</a></Menu.Item> */}
          <Menu.Item key="3"><a href='#contact' style={{color: 'white'}}>CONTACT</a></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0px', marginTop: 64, alignItems: 'center' }}>
        <div className="App">
          <div className="App-header" id='home' style={{ scrollMarginTop: '64px' }}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <div id='info' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundImage: `url(${bg})`,
            backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover', scrollMarginTop: '64px',
          }}>
            <p style={{textAlign: 'center', fontSize: 20, fontFamily: 'sans-serif', color: 'black', width: lowWidth ? 350 : 640,
              backgroundColor: 'white', padding: 15, borderRadius: 5, marginBottom: 0
            }}>
              Prestige Consulting specializes in building and improving our client's credit score.
              We educate our clients on how to apply for credit cards with higher limits and utilize them to help achieve their goals.
            </p>

            <div style={{marginTop: 20, backgroundColor: 'white', padding: 20, borderRadius: 5}}>
              <h1 style={{fontSize: 30, marginBottom: 20, textTransform: 'uppercase', color: 'black'}}>
                Services
              </h1>

              <div style={{ display: 'flex', flexDirection: lowWidth ? 'column' : 'row' }}>
                {
                  services.map((item, index) =>
                  {
                    let hasMargin = index > 0 && index < services.length - 1 && !lowWidth;

                    return (
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: index !== services.length - 1 && lowWidth ? 15 : 0,}}>
                        <Card
                          key={index}
                          hoverable
                          style={{width: lowWidth ? 350 : 200, marginLeft: hasMargin ? 15 : 0, 
                            marginRight: hasMargin ? 15 : 0,
                            height: lowWidth ? 500 : 380
                          }}
                          cover={<img src={item.image} alt={item.service} />}
                        >
                          <Meta title={item.service} description={item.desc} />
                        </Card>

                        {/* <Button onClick={() => window.open(item.payment_link, '_blank')}
                          style={{width: lowWidth ? 350 : 200, fontSize: 15}}
                        >
                          Purchase Service
                        </Button> */}
                      </div>
                    )
                  })
                }
              </div>
            </div>

            <div style={{marginTop: 20, backgroundColor: 'white', padding: 20, borderRadius: 5}}>
              <h1 style={{fontSize: 30, marginBottom: 20, textTransform: 'uppercase', color: 'black'}}>
                Payment Options
              </h1>

              <div style={{ display: 'flex', flexDirection: lowWidth ? 'column' : 'row' }}>
                {
                  payment_options.map((item, index) =>
                  {
                    let hasMargin = index > 0 && index < payment_options.length - 1 && !lowWidth;

                    return (
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: index !== payment_options.length - 1 && lowWidth ? 15 : 0,}}>
                        <Card
                          key={index}
                          hoverable
                          style={{marginLeft: hasMargin ? 15 : 0, 
                            marginRight: hasMargin ? 15 : 0,
                            // height: lowWidth ? 500 : 380
                          }}
                          cover={<img src={item.image} alt={item.name} width='96' height='96' style={{padding: 10}} />}
                        >
                          <Meta title={item.name} style={{justifyContent: 'center'}} />
                        </Card>
                      </div>
                    )
                  })
                }
              </div>
            </div>

          </div>

          {/* <div id='payment' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 20,
            backgroundColor: 'white', scrollMarginTop: '64px',
          }}>
          </div> */}

          <div id='contact' style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column',
            padding: 20, backgroundAttachment: 'fixed', backgroundPosition: 'center',
            scrollMarginTop: '64px', backgroundColor: 'white', justifyContent: 'center',
          }}>
            <Card
              hoverable
              style={{ width: 350, padding: 20, alignItems: 'center' }}
              cover={<img src={logo} />}
            >
              <Meta description={
                  <a target="_blank" rel="noreferrer" href='https://www.instagram.com/prestigecredit_consulting/'>
                    <img src={instagram} width={64} height={64} />
                  </a>
                } 
                style={{textAlign: 'center', alignSelf: 'center', justifyContent: 'center'}}
              />
              <Meta description={
                  <a target="_blank" rel="noreferrer" href='prestige.consulting@gofreshpr.biz'>
                    <img src={email} width={64} height={64} />
                  </a>
                } 
                style={{textAlign: 'center', alignSelf: 'center', justifyContent: 'center'}}
              />
            </Card>
          </div>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>
        Made By ANT DESIGNS LLC
        <br />
        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/antdesignsllc/'>INSTAGRAM</a>
        <br />
        <a target="_blank" rel="noreferrer" href='https://antdesignsllc.github.io/antdesllc/'>WEBSITE</a>
      </Footer>
    </Layout>
  );
}

export default App;
