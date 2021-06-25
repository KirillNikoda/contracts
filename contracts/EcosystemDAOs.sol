// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import {IDac} from "./interfaces/IDac.sol";
import {IDacFactory} from "./interfaces/IDacFactory.sol";
import {IDaf} from "./interfaces/IDaf.sol";
import {IDafFactory} from "./interfaces/IDafFactory.sol";

contract EcosystemDAOs {
    struct Dac {
        string name;
        string symbol;
        uint256 tokenPrice;
        address dacAddress;
        address currency;
    }

    struct Daf {
        string name;
        string symbol;
        uint256 tokenPrice;
        address dafAddress;
        address currency;
    }

    receive() external payable {
        revert();
    }

    function getEcosystemDacs(
        address _factoryAddress,
        address _factoryAddress1,
        address _factoryAddress2
    )
        external
        view
        returns (
            Dac[] memory,
            Dac[] memory,
            Dac[] memory
        )
    {
        IDacFactory factory = IDacFactory(_factoryAddress);
        IDacFactory factory1 = IDacFactory(_factoryAddress1);
        IDacFactory factory2 = IDacFactory(_factoryAddress2);

        IDac[] memory dacs = factory.getDacs();
        IDac[] memory dacs1 = factory1.getDacs();
        IDac[] memory dacs2 = factory2.getDacs();

        Dac[] memory dacsInfo = new Dac[](dacs.length);
        Dac[] memory dacsInfo1 = new Dac[](dacs1.length);
        Dac[] memory dacsInfo2 = new Dac[](dacs2.length);

        for (uint256 i = 0; i < dacs.length; i++) {
            dacsInfo[i] = Dac({
                name: dacs[i].name(),
                symbol: dacs[i].symbol(),
                tokenPrice: dacs[i].governanceTokensPrice(),
                dacAddress: address(dacs[i]),
                currency: dacs[i].currency()
            });
        }

        for (uint256 i = 0; i < dacs1.length; i++) {
            dacsInfo1[i] = Dac({
                name: dacs1[i].name(),
                symbol: dacs1[i].symbol(),
                tokenPrice: dacs1[i].governanceTokensPrice(),
                dacAddress: address(dacs1[i]),
                currency: dacs1[i].currency()
            });
        }

        for (uint256 i = 0; i < dacs2.length; i++) {
            dacsInfo2[i] = Dac({
                name: dacs2[i].name(),
                symbol: dacs2[i].symbol(),
                tokenPrice: dacs2[i].governanceTokensPrice(),
                dacAddress: address(dacs2[i]),
                currency: dacs2[i].currency()
            });
        }
        return (dacsInfo, dacsInfo1, dacsInfo2);
    }

    function getEcosystemDafs(
        address _factoryAddress,
        address _factoryAddress1,
        address _factoryAddress2
    )
        external
        view
        returns (
            Daf[] memory,
            Daf[] memory,
            Daf[] memory
        )
    {
        IDafFactory factory = IDafFactory(_factoryAddress);
        IDafFactory factory1 = IDafFactory(_factoryAddress1);
        IDafFactory factory2 = IDafFactory(_factoryAddress2);

        IDaf[] memory dafs = factory.getDafs();
        IDaf[] memory dafs1 = factory1.getDafs();
        IDaf[] memory dafs2 = factory2.getDafs();

        Daf[] memory dafsInfo = new Daf[](dafs.length);
        Daf[] memory dafsInfo1 = new Daf[](dafs1.length);
        Daf[] memory dafsInfo2 = new Daf[](dafs2.length);

        for (uint256 i = 0; i < dafs.length; i++) {
            dafsInfo[i] = Daf({
                name: dafs[i].name(),
                symbol: dafs[i].symbol(),
                tokenPrice: dafs[i].governanceTokensPrice(),
                dafAddress: address(dafs[i]),
                currency: dafs[i].currency()
            });
        }

        for (uint256 i = 0; i < dafs1.length; i++) {
            dafsInfo1[i] = Daf({
                name: dafs1[i].name(),
                symbol: dafs1[i].symbol(),
                tokenPrice: dafs1[i].governanceTokensPrice(),
                dafAddress: address(dafs1[i]),
                currency: dafs1[i].currency()
            });
        }

        for (uint256 i = 0; i < dafs2.length; i++) {
            dafsInfo2[i] = Daf({
                name: dafs2[i].name(),
                symbol: dafs2[i].symbol(),
                tokenPrice: dafs2[i].governanceTokensPrice(),
                dafAddress: address(dafs2[i]),
                currency: dafs2[i].currency()
            });
        }
        return (dafsInfo, dafsInfo1, dafsInfo2);
    }
}
