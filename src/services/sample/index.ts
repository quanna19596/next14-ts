import InterceptorInstance from '@/services/interceptors';

console.log(process.env.SAMPLE_SERVICE_BASE_URL);

const SampleService = InterceptorInstance(process.env.SAMPLE_SERVICE_BASE_URL);

export default SampleService;
