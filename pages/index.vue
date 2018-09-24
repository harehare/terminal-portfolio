<template>
  <div class="window">
    <div class="header">
      <button class="tab" v-bind:class="{ selected: $store.state.console.selectedTab === 'home' }" @click="selectTab('home')">home</button>
      <button class="tab" v-bind:class="{ selected: $store.state.console.selectedTab === 'personal' }" @click="selectTab('personal')">personal work</button>
      <button class="tab" v-bind:class="{ selected: $store.state.console.selectedTab === 'contact' }" @click="selectTab('contact')">contact</button>
    </div>
    <div class="container">
      <div class="welcome">
        <pre style="display:inline-block;" v-show="$store.state.console.selectedTab === 'home'">
          __        __   _                          
  \ \      / /__| | ___ ___  _ __ ___   ___ 
  \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \
    \ V  V /  __/ | (_| (_) | | | | | |  __/
    \_/\_/ \___|_|\___\___/|_| |_| |_|\___|
        </pre>
        <pre style="display:inline-block;" v-show="$store.state.console.selectedTab === 'personal'">
           ____                                 _  __        __         _    
|  _ \ ___ _ __ ___  ___  _ __   __ _| | \ \      / /__  _ __| | __
| |_) / _ \ '__/ __|/ _ \| '_ \ / _` | |  \ \ /\ / / _ \| '__| |/ /
|  __/  __/ |  \__ \ (_) | | | | (_| | |   \ V  V / (_) | |  |   
|_|   \___|_|  |___/\___/|_| |_|\__,_|_|    \_/\_/ \___/|_|  |_|\_\
        </pre>
        <pre style="display:inline-block;" v-show="$store.state.console.selectedTab === 'contact'">
  ____            _             _   
 / ___|___  _ __ | |_ __ _  ___| |_ 
| |   / _ \| '_ \| __/ _` |/ __| __|
| |__| (_) | | | | || (_| | (__| |_ 
 \____\___/|_| |_|\__\__,_|\___|\__|
        </pre>
        <img src="https://avatars3.githubusercontent.com/u/533078?s=460&v=4" style="width:5vw;margin:10px;" />
      </div>
      <div class="console" v-for="command in $store.state.console.commands" v-bind:key="command.cmd">
        <cmd
          v-bind:cmd="command.cmd" />
        <cmd-result
          v-bind:result="command.result" />
      </div>
    </div>
  </div>
</template>

<script>
import Cmd from '~/components/Cmd.vue';
import CmdResult from '~/components/CmdResult.vue';
import { mapActions } from 'vuex';

const commands = [
  {
    cmd: 'whoami',
    separator: '',
    result: [
      {
        text: 'Takahiro Sato',
        style: {
          color: '#3C8893'
        }
      }
    ]
  },
  {
    cmd: 'cat profile.txt',
    separator: '',
    result: [
      {
        text:
          '2017年11月からファンコミュニケーションズで広告システムの開発、運用を担当しています。<br/>主にPython, Scalaを使うことが多いです。<br/>React + Reduxで画面の開発もやっています。<br/><br/>今まで携わったサービスではユーザに必要な情報を提供できることを目指して日々開発しています。<br/>プライベートでは最近 Clojure, Elm が好きで書いています。',
        style: {
          color: '#FEFEFE'
        }
      }
    ]
  },
  {
    cmd: 'll history',
    separator: '',
    result: [
      {
        text: 'drwxr-xr-x 2 takahiro sato 4096  11月 1 2017  F@N Communications, Inc.<br/>',
        style: {
          color: '#003E8D'
        }
      },
      {
        text: 'drwxr-xr-x 2 takahiro sato 4096  05月 1 2013  Kakaku.com, Inc.<br/>',
        style: {
          color: '#033A96'
        }
      },
      {
        text: 'drwxr-xr-x 2 takahiro sato 4096  08月 1 2011  Future Link Network Co.,Ltd.<br/>',
        style: {
          color: '#3995D8'
        }
      }
    ]
  },
  {
    cmd: 'ls skills',
    separator: '&nbsp;&nbsp;',
    result: [
      {
        text: 'Python',
        style: {
          color: '#FCE478'
        }
      },
      {
        text: 'Scala',
        style: {
          color: '#DC3B30'
        }
      },
      {
        text: 'GCP',
        style: {
          color: '#4E8DF6'
        }
      },
      {
        text: 'Java',
        style: {
          color: '#E73E33'
        }
      },
      {
        text: 'Golang',
        style: {
          color: '#69D7E4'
        }
      },
      {
        text: 'Nginx',
        style: {
          color: '#4C973B'
        }
      },
      {
        text: 'Django',
        style: {
          color: '#193C2D'
        }
      },
      {
        text: 'React',
        style: {
          color: '#62DAFB'
        }
      },
      {
        text: 'Solr',
        style: {
          color: '#DA432F'
        }
      },
      {
        text: 'Elasticsearch',
        style: {
          color: '#5BBEB0'
        }
      },
      {
        text: 'MySQL',
        style: {
          color: '#307590'
        }
      },
      {
        text: 'Chef',
        style: {
          color: '#D4852C'
        }
      },
      {
        text: 'PHP',
        style: {
          color: '#6280B9'
        }
      }
    ]
  },
  {
    cmd: 'ls hobby',
    separator: '&nbsp;&nbsp;',
    result: [
      {
        text: 'Clojure',
        style: {
          color: '#90B3FC'
        }
      },
      {
        text: 'Elm',
        style: {
          color: '#60B5CC'
        }
      },
      {
        text: 'Nuxt.js',
        style: {
          color: '#5BB884'
        }
      },
      {
        text: 'Firebase',
        style: {
          color: '#F9CA3E'
        }
      },
      {
        text: 'Heroku',
        style: {
          color: '#8868AD'
        }
      }
    ]
  },
  {
    cmd: 'ls studying',
    separator: '&nbsp;&nbsp;',
    result: [
      {
        text: 'Kubernetes',
        style: {
          color: '#326DE6'
        }
      },
      {
        text: 'Management',
        style: {
          color: '#3C8893'
        }
      }
    ]
  }
];

const personalWork = [
  {
    cmd: 'cat personal_works.txt',
    separator: '',
    result: [
      {
        pre: true,
        text: `
# Androidアプリ

## SD Manager

高速に検索できるファイルマネージャー。
30万ダウンロード。(諸事情により、非公開)

https://octoba.net/archives/20111108-android-2347.html
http://androck.jp/app/system/file_management/sd-manager/

## Icon Explorer

Icon Finderの検索アプリ。
10万ダウンロード。(諸事情により、非公開)

https://octoba.net/archives/20120523-android-app-6.html

# Chrome Extension

## Chick

ブックマーク、履歴の全文検索。
N-Gramでインデックスを作成して、高速に検索可能。

https://chrome.google.com/webstore/detail/chick/iiekfnbpcjolepcejefknaoblbkegbdf

# Web App

## GROWNOTE

シンプルなマークダウンエディタ。
タグと全文検索で高速に目的のファイルを検索可能。
PWAなのでオフラインで起動可能。
(Google Driveの同期機能は無効)

https://info.growtech.tk/
`,
        style: {}
      }
    ]
  }
];

const contact = [
  {
    cmd: 'cat contact.txt',
    separator: '',
    result: [
      {
        text: '<a href="mailto:harehare1110@gmail.com">harehare1110@gmail.com</a>',
        style: {}
      }
    ]
  }
];

export default {
  mounted() {
    this.$nextTick(async () => {
      this.$store.dispatch('console/clear');
      for (const command of commands) {
        this.$store.dispatch('console/next', command);
        await this.sleep(500);
      }
    });
  },
  methods: {
    ...mapActions({
      select: 'console/selectTab',
      clear: 'console/clear',
      next: 'console/next'
    }),
    async selectTab(tab) {
      this.select(tab);
      this.clear();
      const cmd = tab === 'home' ? commands : tab === 'personal' ? personalWork : contact;

      for (const c of cmd) {
        this.next(c);
        await this.$delay(500);
      }
    }
  },
  components: {
    Cmd,
    CmdResult
  }
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono'); */

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #222;
  font-size: 1.1rem;
  color: #fefefe;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.console {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.header {
  background-color: #ccc;
  box-sizing: border-box;
  height: 25px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.tab {
  height: 25px;
  color: #444;
  padding: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(150, 150, 150, 0.3);
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.selected {
  background-color: #aaa;
}

.welcome pre {
  font-family: 'Ubuntu Mono', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  color: #47b784;
  letter-spacing: 1px;
}
</style>

