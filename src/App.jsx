import gitFlowImg from "../src/assets/git-flow.png";

function App() {
  return (
    <div className="m-10">
      <h1 className="text-4xl text-center font-extrabold m-10">Git Flow</h1>
      <article className="flex flex-col items-center gap-5 m-10">
        <h2 className="text-2xl">🚀 Git Flow란?</h2>
        <p>
          Git Branch 전략 중 하나로 브렌치를 어떻게 나눌지에 대한 규칙이다.
          <br />
          카페에서 메뉴판을 관리하는 방식과 비슷하다.
        </p>
        <div className="flex flex-col items-center gap-3">
          <img src={gitFlowImg} className="w-96" />
          <a
            href="https://velog.io/@kw2577/Git-branch-%EC%A0%84%EB%9E%B5"
            className="text-[13px] text-[#ffffff6a]"
          >
            출처 : {`https://velog.io/@kw2577/Git-branch-%EC%A0%84%EB%9E%B5`}
          </a>
        </div>
      </article>
      <hr className="text-[#ffffff6a]" />
      <article className="flex flex-col gap-5 m-10">
        <h2 className="text-2xl text-center">🌲 Git Flow의 기본 브렌치들</h2>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">main 브랜치</h3>
          <ul className="list-disc">
            <li>
              배포용 브랜치{" "}
              <span className="text-[#ffffff94]">{`(최종 메뉴판)`}</span>
            </li>
            <li className="list-inside list-none"> - 항상 출시 가능한 상태</li>
            <li className="text-[#ffffff94] list-inside list-none">
              {" "}
              - 언제든 손님에게 보여줄 수 있는 상태
            </li>
          </ul>
          <h3 className="text-xl">develop 브랜치</h3>
          <ul className="list-disc">
            <li>
              개발용 브랜치{" "}
              <span className="text-[#ffffff94]">{`(신메뉴 연구실)`}</span>
            </li>
            <li className="list-inside list-none">
              {" "}
              - 다음 출시를 준비하는 통합 브랜치
            </li>
            <li className="text-[#ffffff94] list-inside list-none">
              {" "}
              - 다음 신메뉴를 준비하는 연구실
            </li>
          </ul>
        </div>
      </article>
      <article className="flex flex-col gap-5 m-10">
        <h2 className="text-2xl text-center">🌿 Git Flow의 보조 브렌치들</h2>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">
            feature 브랜치 {`(feature/기능명(혹은 issue number)`}
          </h3>
          <ul className="list-disc">
            <li>
              기능 개발용 브랜치{" "}
              <span className="text-[#ffffff94]">{`(신메뉴 레시피 노트)`}</span>
            </li>
            <li className="list-inside list-none">
              {" "}
              - develop 브랜치에서 만들고, 완료후 develop으로 합친다.
            </li>
            <li className="text-[#ffffff94] list-inside list-none">
              {" "}
              - 시행착오를 거쳐서 완성한 레시피{`(기능 개발)`}를 신메뉴 연구실
              {`(develop 브랜치)`}로 가져간다.
            </li>
          </ul>
          <h3 className="text-xl">release 브랜치 {`(release/버전)`}</h3>
          <ul className="list-disc">
            <li>
              출시 준비용 브랜치{" "}
              <span className="text-[#ffffff94]">{`(메뉴판 교정본)`}</span>
            </li>
            <li className="list-inside list-none">
              {" "}
              - 버그 수정 및 문서/버전 태깅 준비 후 main과 develop에 반영
            </li>
            <li> - 새로운 기능을 추가하지 않는다.</li>
            <li className="text-[#ffffff94] list-inside list-none">
              {" "}
              - 실제 메뉴판에 올리기 전에 교정 보는 단계{" "}
              {`(새로운 신메뉴를 추가하지 않는다.)`}
            </li>
          </ul>
          <h3 className="text-xl">hotfix 브랜치 {`(hotfix/버그명)`}</h3>
          <ul className="list-disc">
            <li>
              긴급 수정용 브랜치{" "}
              <span className="text-[#ffffff94]">{`(수정 스티커)`}</span>
            </li>
            <li className="list-inside list-none">
              {" "}
              - 급하게 수정해야 할 사항이 있을 경우 main에서 만들어서 빠르게
              고치고 main과 develop에 반영
            </li>
            <li className="list-inside list-none">
              {" "}
              - main과 develop 둘 다 반영해주어야 다음에 같은 오류가 나지
              않는다.
            </li>
            <li className="text-[#ffffff94] list-inside list-none">
              {" "}
              - 교정시에 발견 못한 오타가 있을 경우 실제 메뉴판{`(main)`}을
              임시로 고치고, 다음달 메뉴판{`(develop)`}도 수정하여 다음 메뉴판에
              오타가 나는 걸 방지한다.
            </li>
          </ul>
        </div>
      </article>
      <hr className="text-[#ffffff6a]" />
      <article className="flex flex-col gap-5 m-10">
        <h2 className="text-2xl text-center">🔄 실제 흐름은?</h2>
        <ol className="list-decimal">
          <li>기능 개발 시작 - feature/기능명 브랜치에서 작업</li>
          <li>기능 완성 - develop 브랜치로 합치기</li>
          <li>출시 준비 - release/버전 브랜치를 만들어서 마무리 정리</li>
          <li>출시 완료 - main 브랜치에 합치고 태그 달기 {`(예 : v1.2.0)`}</li>
          <li>
            긴급 버그 발생 - hotfix/버그명 브랜치에서 수정하고 main과 develop
            브랜치 모두에 반영
          </li>
        </ol>
      </article>
      <hr className="text-[#ffffff6a]" />
      <article className="flex flex-col  gap-5 m-10">
        <h2 className="text-2xl text-center">
          💡 Git Flow를 사용하는 이유는 뭘까?
        </h2>
        <ul className="list-disc">
          <li>여러 기능을 동시에 개발하면서도 메인 코드가 안정적이기 위해서</li>
          <li>출시 준비 중에도 새로운 기능 개발을 이어가기 위해서</li>
          <li>운영중에 문제가 생겨도 빠르게 수정하기 위해서</li>
        </ul>
      </article>
    </div>
  );
}

export default App;
