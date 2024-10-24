import { ConnectButton } from "@rainbow-me/rainbowkit";

const Account = ({ main = false }) => {
  return (
    // <ConnectButton />
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div className={`sm:text-white ${main ? "" : "md:text-black"}`}>
            {(() => {
              if (!connected) {
                return (
                  <div>
                    <div className="hidden sm:block">
                      <button
                        onClick={openConnectModal}
                        className={`${
                          main
                            ? ""
                            : "w-[342px] md:w-[342px] h-[52px] hover:underline"
                        } py-5 md:py-6 pr-10 font-desc2`}
                      >
                        <div className="flex flex-row justify-end items-center space-x-4 md:absolute md:top-8 md:right-10 custom-lg:static">
                          <img
                            className="block md:hidden"
                            src="/images/wallet.png"
                          />
                          <div className="-mt-4 hidden sm:block custom-lg:hidden custom-lg-fix:block">
                            Connect Wallet
                          </div>
                          <div className="hidden custom-lg:block custom-lg-fix:hidden">
                            Connect
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="block sm:hidden">
                      <button onClick={openConnectModal}>
                        <img src="/images/wallet.png" />
                      </button>
                    </div>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <div>
                    <div className="hidden sm:block">
                      <button
                        onClick={openChainModal}
                        className={`${
                          main ? "" : "w-[242px] h-[52px] hover:underline"
                        } py-2 font-desc2`}
                      >
                        <div className="flex flex-row justify-center items-center space-x-4">
                          <img src="/images/wrongNetwork.png" />
                          <div className="-mt-3">Switch network</div>
                        </div>
                      </button>
                    </div>
                    <div className="block sm:hidden">
                      <button onClick={openChainModal}>
                        <img src="/images/wrongWallet.png" />
                      </button>
                    </div>
                  </div>
                );
              }
              return (
                <div>
                  <div className="hidden sm:block">
                    <button
                      onClick={openAccountModal}
                      className={`${
                        main ? "" : "w-[242px] h-[52px] hover:underline"
                      } py-2 font-desc2`}
                    >
                      <div className="flex flex-row justify-center items-center space-x-4">
                        <img src="/images/wallet.png" />
                        <div className="-mt-3">{account.displayName}</div>
                      </div>
                    </button>
                  </div>
                  <div className="block sm:hidden">
                    <button onClick={openAccountModal}>
                      <img src="/images/connectedWallet.png" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default Account;
