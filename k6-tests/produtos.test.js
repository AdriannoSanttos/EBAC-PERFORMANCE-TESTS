import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 5,
    duration: '15s',
};

export default function () {
    
    let resGet = http.get('http://localhost:3001/api/products');
    check(resGet, {
        'GET status 200/201': (r) => r.status === 200 || r.status === 201,
        'expected_response': (r) => r.json().length >= 0,
    });

    
    let payload = JSON.stringify({
        name: 'Produto Teste',
        description: 'Descrição teste',
        itemPrice: Math.floor(Math.random() * 100),
    });

    let params = {
        headers: { 'Content-Type': 'application/json' },
    };

    let resPost = http.post('http://localhost:3001/api/products', payload, params);
    check(resPost, {
        'POST status 201': (r) => r.status === 201,
        'expected_response': (r) => r.json().name === 'Produto Teste',
    });

    sleep(1);
}
