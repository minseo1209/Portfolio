import React from 'react';

function About() {
  return (
    <div>
      <div class="row">
        <div class="col">
          <img src="./imgs/MinSeo.jpg" alt="김민서" className="picture"></img>
        </div>
        <div class="col">
          <table>
            <tbody>
              <tr>
                <td className="Emoji">👩</td>
                <td>김민서</td>
              </tr>
              <tr>
                <td className="Emoji">🎂</td>
                <td>1998년 12월 09일 (여)</td>
              </tr>
              <tr>
                <td className="Emoji">🎓</td>
                <td>송원대학교 (전기전자공학과)</td>
              </tr>
              <tr>
                <td className="Emoji">📞</td>
                <td>+82 010-9475-4703</td>
              </tr>
              <tr>
                <td className="Emoji">✉️</td>
                <td>alstj6009@gmail.com</td>
              </tr>
              <tr>
                <td className="Emoji">
                  <img src="./imgs/git.png" alt="git"></img>
                </td>
                <td>
                  <a href="https://github.com/minseo1209">
                    https://github.com/minseo1209
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="record">
        프론트엔드에 열정 넘치는 <b>김민서</b> 입니다. 다양한 프로젝트 경험을
        통해 혼자서 전체 프로세스를 담당하며 독립적으로 작업하고 문제를 해결하는
        능력을 키웠습니다. <br />웹 기술의 기초를 탄탄하게 다지면서, 사용자
        중심의 직관적이고 효과적인 UI/UX를 디자인하는 데 관심을 가지고 있습니다.
        <br /> 프론트엔드 개발 분야에서 제 역량을 더욱 성장시킬 수 있는 기회를
        기다리고 있습니다.
      </p>
    </div>
  );
}

export default About;
