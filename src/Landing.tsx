import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { currentWalletStore, marloweSDKStore } from './stores';

const Landing = () => {
  const history = useNavigate();
  // let marloweSDK;

  // const unsubscribeMarloweSDK = marloweSDKStore.subscribe(sdk => marloweSDK = sdk);

  // useEffect(() => {
  //   return () => {
  //     unsubscribeMarloweSDK();
  //   };
  // }, []);

  async function connectWallet(walletName:String) {
    return walletName;
    // await marloweSDK.connectWallet(walletName);
    // const connectedWallet = marloweSDK.getConnectedWallet();
    // await currentWalletStore.set(connectedWallet);
    // history.push('/payouts');
  }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="row justify-content-center">
          <img src="/images/marlowe-logo-primary.svg" alt="Logo" className="mb-4" id="marlowe-logo" />
        </div>
        <div className="row">
          <p className="title">Reward withdrawals prototype</p>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 ">
            <div className="card">
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="card-title">Choose a wallet</h5>
                      <p className="card-help-text">Please select a wallet to view rewards.</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 bordered-container" onClick={() => connectWallet("nami")} data-walletName="nami">
                      <img src="/images/nami.svg" alt="Icon Before" className="icon" />
                      Nami Wallet
                      <div className="cardano-badge">
                        <img src="https://s3-alpha-sig.figma.com/img/86d7/e924/af46237d72b394a9b4c58e515a1c641a?Expires=1693180800&Signature=R5iFCC-GCNGa6baiVaKxGpxwQCMsrPLQtwnLGS-mEkU2lMs644bSsrzO6d43jYX1J~PdeAjClhhlws9rZwZidkTMN7PjWQwcyOw8rh9CgXNvyL9doyZr9STpdgKvE8n1v4HU4vJ2Gk16cld9Wl~hTYIdOmkJfaBZHMyLldLoxoaYWL~YLwcgP9yO8e~9B76l7U0GLixGS3FOQ3--NvgVqzquOVsqCtO7lP8g7WE9NNjihAqRLQb6fUFQ8H6jEn0n61OcvMwiPkLoLuNS5rgMcehJWbAznbyBeDoalopgYUwlyJIC8Hl6Tvsf0sYJosCsJvkbtI3SEAxgSnFpnkiE0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Icon After" className="icon-after" />
                        Cardano
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 bordered-container" onClick={() => connectWallet("eternl")} data-walletName="eternl">
                      <img aria-hidden="true" src="https://lh3.googleusercontent.com/XjJJJR7nnCSk7L4ZF1B62j2BN-A571wvxW2Nadc43UBrvqiUZBqEfpOjZfgjggYwERErKLWSVSSauT44gXkD_i2tdrY=w128-h128-e365-rj-sc0x00ffffff" style={{ width: '30px', height: '30px' }} />
                      Eternl
                      <div className="cardano-badge">
                        <img src="https://s3-alpha-sig.figma.com/img/86d7/e924/af46237d72b394a9b4c58e515a1c641a?Expires=1693180800&Signature=R5iFCC-GCNGa6baiVaKxGpxwQCMsrPLQtwnLGS-mEkU2lMs644bSsrzO6d43jYX1J~PdeAjClhhlws9rZwZidkTMN7PjWQwcyOw8rh9CgXNvyL9doyZr9STpdgKvE8n1v4HU4vJ2Gk16cld9Wl~hTYIdOmkJfaBZHMyLldLoxoaYWL~YLwcgP9yO8e~9B76l7U0GLixGS3FOQ3--NvgVqzquOVsqCtO7lP8g7WE9NNjihAqRLQb6fUFQ8H6jEn0n61OcvMwiPkLoLuNS5rgMcehJWbAznbyBeDoalopgYUwlyJIC8Hl6Tvsf0sYJosCsJvkbtI3SEAxgSnFpnkiE0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Icon After" className="icon-after" />
                        Cardano
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
