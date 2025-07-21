export const Tools: React.FC = () => {
  return (
    <div id='tools' className='space-y-12 scroll-mt-[3rem] pt-[3rem] -mt-[3rem] py-16 mb-24'>
      <div className='space-y-6'>
        <h2 className='text-4xl font-semibold'>Инструменты</h2>
        <p className='text-xl max-w-2xl mx-auto'>
          Узнайте, какими информационными технологиями мы владеем.
        </p>
      </div>

      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-4 max-w-5xl w-full'>
          <div className='p-8 pl-4 text-left space-y-3 bg-gray-800 shadow-md bg-opacity-80 rounded-xl text-white'>
            <p className='text-lg font-semibold'>Языки программирования</p>
            <ul className='list-none'>
              <li>Java (Java Spring Boot)</li>
              <li>JavaScript (React.js, AngularJS, Next.js...)</li>
              <li>SQL</li>
              <li>Python</li>
              <li>Golang</li>
            </ul>
          </div>

          <div className='p-8 pl-4 text-left space-y-3 bg-gray-800 shadow-md bg-opacity-80 rounded-xl text-white'>
            <p className='text-lg font-semibold'>Базовое программное обеспечение</p>
            <ul className='list-none'>
              <li>Camunda BPM</li>
              <li>PostgreSQL</li>
              <li>Minio</li>
              <li>ArenaData DB</li>
              <li>Apache Superset</li>
              <li>Birt</li>
              <li>Apache NiFi</li>
              <li>Apache Kafka</li>
              <li>Apache Tika</li>
              <li>Keycloak</li>
              <li>Astra Linux</li>
            </ul>
          </div>

          <div className='p-8 pl-4 text-left space-y-3 bg-gray-800 shadow-md bg-opacity-80 rounded-xl text-white'>
            <p className='text-lg font-semibold'>Дополнительное программное обеспечение</p>
            <ul className='list-none'>
              <li>k8s</li>
              <li>Docker</li>
              <li>Grafana</li>
              <li>Fluentd</li>
              <li>Prometheus</li>
              <li>SonarQube</li>
              <li>Trivy</li>
              <li>Dependency track</li>
              <li>Owasp zap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
